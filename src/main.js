import Vue from 'vue'
import App from './App.vue'
import PrvaKomponenta from './components/PrvaKomponenta.vue'

Vue.component('prvaK', PrvaKomponenta)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
