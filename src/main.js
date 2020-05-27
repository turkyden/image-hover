import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'
import VueClipboard from 'vue-clipboard2'
import VueNotifications from 'vue-notification'
import './assets/atom-one-dark.css'

// VueClipboard
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

// VueHighlightJS
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

Vue.use(VueNotifications)

new Vue({
  render: h => h(App),
}).$mount('#app')
