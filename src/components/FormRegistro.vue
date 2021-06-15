<template>
  <div class="formularioNuevoUsuario">
    <b-card style="" class="align-content-center text-center px-5 py-2 my-auto mx-auto">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-2"
          label="Nombre completo:"
          label-for="input-2"
          class="mt-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Correo misena:"
          label-for="input-1"
          description="Ingrese correo mi sena"
          class="mt-5"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="ejemplo@misena.edu.co"
            required
          ></b-form-input>
        </b-form-group>
      
        <b-form-group
          id="input-group-4"
          label="Tipo de documento:"
          label-for="input-4"
          class="mt-5 "
        >
          <b-form-select
            id="input-4"
            v-model="form.tipoDocumento"
            :options="Documentos"
            class=""
            required
          ></b-form-select>
        
          <b-form-input
            id="input-4"
            v-model="form.numeroDocumento"
            type="number"
            placeholder="Numero de documento"
            class="mt-2 col-4"
            required
          ></b-form-input>
        </b-form-group>
      

        <b-form-group
          id="input-group-3"
          label="Rol:"
          label-for="input-3"
          class="mt-5"
        >
          <b-form-select
            id="input-3"
            v-model="form.rol"
            :options="Roles"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group class="mt-5">
          <b-button type="submit" variant="success" class="mx-2"
            >Crear</b-button
          >
          <b-button type="reset" variant="danger" class="mx-2"
            >Cancelar</b-button
          >
        </b-form-group>
      </b-form>
    </b-card>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        tipoDocumento: null,
        rol: null,
        numeroDocumento: "",
      },
      Roles: [
        { text: "Elija uno", value: null },
        "Administrativo",
        "Instructor",
        "SuperAdmin",
      ],
      show: true,
      Documentos: [
        { text: "Elija uno", value: null },
        "Cedula de ciudadania",
        "Tarjeta de identidad",
        "Cedula de extranjeria",
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(
        "Usuario: " + JSON.stringify(this.form.name) + " creado correctamente."
      );
      console.log(this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.tipoDocumento = null;
      this.form.numeroDocumento = "";
      this.form.rol = null;

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
  
</style>
