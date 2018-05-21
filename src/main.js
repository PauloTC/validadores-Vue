import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Vuetify  from 'vuetify'
import Vuex from 'vuex'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
