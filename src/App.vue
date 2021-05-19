<template>

<div id="app">
    <headerComponente></headerComponente>
    <formularioNuevoUsuario></formularioNuevoUsuario>
    <footerComponente></footerComponente>
</div>
</template>

<script>
import headerComponente from "./components/Header";
import formularioNuevoUsuario from "./components/FormRegistro";
import footerComponente from "./components/Footer"




export default {
  name: 'App',
  components: {
    headerComponente,
    formularioNuevoUsuario,
    footerComponente
}
}
</script>

<style>

</style>
