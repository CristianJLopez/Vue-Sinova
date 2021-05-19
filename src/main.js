import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import PortalVue from 'portal-vue'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
