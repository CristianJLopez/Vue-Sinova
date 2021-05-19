<template>
    <div class="headerComponente">
    <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-md-8 pt-4">
                    <h1 onclick="botonInicio()" class="text-white pt-3"><img src="../assets/img/logoblanco.png" style="max-width: 5rem;" id="imglogo" alt="Logo SENA"> SINOVA <small>Crear usuario</small></h1>
                </div>
                <div class="col-md-4 pt-5 text-left text-white">
                    <h5 id="funcionario">Funcionario(a): Cristian Lopez</h5>
                </div>
            </div>
        </div>
    </header>
    </div>
</template>

<script>
export default {
    name:"headerComponente"
}
</script>

<style scoped>
    small {
    font-size: .5em
}
</style>
