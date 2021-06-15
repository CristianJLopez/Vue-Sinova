<template>

  <div id="app">
      <headerComponente></headerComponente>
        <router-link to="/">Inicio</router-link>
        <router-link to="/views/otro">Otro</router-link>
        <formularioNuevoUsuario></formularioNuevoUsuario>
      <footerComponente></footerComponente>
  </div>
      
      

</template>

<script>
import headerComponente from "./components/Header";
import formularioNuevoUsuario from "./components/FormRegistro";
import footerComponente from "./components/Footer";






export default {
  name: 'App',
  components: {
    headerComponente,
    footerComponente,
    formularioNuevoUsuario,
   
}
}
</script>

<style>
  body{
    min-height: 100vh;
    
  }
</style>
