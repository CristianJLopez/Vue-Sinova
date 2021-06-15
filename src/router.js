import Vue from "vue";
import App from "./App.vue"
import Otro from "./views/Otro.vue"
import VueRouter from 'vue-router'

    
Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    name: "login",
    component: App
  },
  {
    path: "/otro",
    name: "otro",
    component: Otro
  },
  
  ];


  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;