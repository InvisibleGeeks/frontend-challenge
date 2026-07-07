import { createApp } from 'vue'
import './style.css'

// Design system fonts (offline, via @fontsource).
// Bricolage Grotesque → titles · Manrope → body.
import '@fontsource/bricolage-grotesque/400.css'
import '@fontsource/bricolage-grotesque/600.css'
import '@fontsource/bricolage-grotesque/700.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'

import App from './App.vue'

createApp(App).mount('#app')
