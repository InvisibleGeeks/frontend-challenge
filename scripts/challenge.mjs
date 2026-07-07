#!/usr/bin/env node
/**
 * Challenge time tracking via git commits.
 *
 *   node scripts/challenge.mjs start [--if-missing]  → records the START (commit "⏱️ START")
 *   node scripts/challenge.mjs submit                → records the SUBMISSION (commit "✅ SUBMIT")
 *   node scripts/challenge.mjs time                  → prints the START → SUBMIT time
 *
 * The first commit marks the start time and the last one the end time.
 */
import { execSync } from 'node:child_process'

const PREFIX = 'chore(challenge):'
const START_MSG = `${PREFIX} ⏱️ START`
const SUBMIT_MSG = `${PREFIX} ✅ SUBMIT`

function sh(cmd) {
  return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim()
}

function isGitRepo() {
  try {
    sh('git rev-parse --is-inside-work-tree')
    return true
  } catch {
    return false
  }
}

function gitUserConfigured() {
  try {
    return Boolean(sh('git config user.name')) && Boolean(sh('git config user.email'))
  } catch {
    return false
  }
}

/** Subjects of all commits (empty if there are none yet). */
function commitSubjects() {
  try {
    return sh('git log --format=%s').split('\n').filter(Boolean)
  } catch {
    return []
  }
}

function hasCommit(keyword) {
  return commitSubjects().some((s) => s.includes(PREFIX) && s.includes(keyword))
}

function start({ ifMissing }) {
  // In --if-missing mode (predev hook) we never block the app from starting:
  // if something fails, we warn and exit with 0.
  if (!isGitRepo()) {
    const msg = 'ℹ️  Not a git repo — initialize with `git init` to track time.'
    if (ifMissing) return console.warn(msg)
    console.error(msg)
    process.exit(1)
  }
  if (!gitUserConfigured()) {
    const msg =
      'ℹ️  Configure git before starting:\n' +
      '     git config user.name  "Your Name"\n' +
      '     git config user.email "you@email.com"'
    if (ifMissing) return console.warn(msg)
    console.error(msg)
    process.exit(1)
  }
  if (ifMissing && hasCommit('START')) return // already started, don't duplicate

  sh(`git commit --allow-empty -m "${START_MSG}"`)
  console.log('⏱️  Start recorded. The clock is running! (commit "⏱️ START")')
}

function submit() {
  if (!isGitRepo() || !gitUserConfigured()) {
    console.error('ℹ️  You need a configured git repo to record the submission.')
    process.exit(1)
  }
  sh('git add -A')
  try {
    sh(`git commit -m "${SUBMIT_MSG}"`)
  } catch {
    sh(`git commit --allow-empty -m "${SUBMIT_MSG}"`)
  }
  console.log('✅ Submission recorded (commit "✅ SUBMIT"). Run `npm run challenge:time` to see the total.')
}

function time() {
  if (!isGitRepo()) {
    console.error('ℹ️  Not a git repo.')
    process.exit(1)
  }
  let rows
  try {
    // Chronological order (oldest first): ISO date + subject.
    rows = sh('git log --reverse --format=%aI%x09%s')
      .split('\n')
      .filter(Boolean)
      .map((l) => {
        const [date, ...rest] = l.split('\t')
        return { date, subject: rest.join('\t') }
      })
  } catch {
    console.error('ℹ️  No commits yet.')
    process.exit(1)
  }

  const startRow = rows.find((r) => r.subject.includes(PREFIX) && r.subject.includes('START'))
  const submitRow = [...rows].reverse().find((r) => r.subject.includes(PREFIX) && r.subject.includes('SUBMIT'))

  if (!startRow) {
    console.error('⚠️  Could not find the "⏱️ START" commit. Run `npm run challenge:start` (or `npm run dev`).')
    process.exit(1)
  }

  const end = submitRow ?? rows[rows.length - 1]
  const endLabel = submitRow ? '✅ SUBMIT' : `last commit ("${end.subject}")`

  const ms = new Date(end.date).getTime() - new Date(startRow.date).getTime()
  const totalMin = Math.max(0, Math.round(ms / 60000))
  const h = Math.floor(totalMin / 60)
  const m = totalMin % 60

  console.log('──────────────────────────────────────────')
  console.log(`  Start (⏱️ START) : ${startRow.date}`)
  console.log(`  End (${endLabel}) : ${end.date}`)
  console.log(`  Total time       : ${h}h ${m}m  (${totalMin} min)`)
  console.log('──────────────────────────────────────────')
  if (!submitRow) {
    console.log('  Note: there is no "✅ SUBMIT" commit yet; used the last commit as the end.')
    console.log('        When you finish, run `npm run challenge:submit`.')
  }
}

const [cmd, ...flags] = process.argv.slice(2)
const ifMissing = flags.includes('--if-missing')

switch (cmd) {
  case 'start':
    start({ ifMissing })
    break
  case 'submit':
    submit()
    break
  case 'time':
    time()
    break
  default:
    console.log('Usage: node scripts/challenge.mjs <start|submit|time> [--if-missing]')
    process.exit(1)
}
