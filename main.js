import Vue from 'vue'
import App from './App'
// ★ No longer imports initAuth — backend login is deprecated; the whitelist is loaded automatically inside utils/auth.js via loadSnList()
import { forceRefreshSnList } from './utils/auth.js'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

// Proactively reload the local whitelist once at startup (async, does not block the UI)
forceRefreshSnList().then(list => {
	console.log(`[main] Loaded ${list.length} whitelist entries`)
}).catch(e => {
	console.warn('[main] Failed to load whitelist:', e.message)
})
