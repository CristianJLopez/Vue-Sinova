import Vue from "vue";
import VueRouter from 'vue-router'
import App from "./views/App.vue"
    
Vue.use(VueRouter)


const routes = [
    {
      path: "./views/App.vue",
      name: "crearUsuarios",
      component: App
    }
  ];


  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;