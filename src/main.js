import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'
import VueClipboard from 'vue-clipboard2'
import './assets/night-owl.css'

// VueClipboard
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

// VueHighlightJS
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
