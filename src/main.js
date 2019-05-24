import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import VCharts from 'v-charts'
import VueGoogleCharts from 'vue-google-charts'
import VueApexCharts from 'vue-apexcharts'

Vue.use(Vuetify)
Vue.use(VCharts)
Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
