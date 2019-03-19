import Vue from 'vue'
import App from './App.vue'
import PrvaKomponenta from './components/PrvaKomponenta.vue'

Vue.component('prvaK', PrvaKomponenta)

Vue.config.productionTip = false

export const bus = new Vue(); //Kreiranje bus eventa

new Vue({
  render: h => h(App),
}).$mount('#app')
