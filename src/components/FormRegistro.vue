<template>
  <div class="formularioNuevoUsuario">
    <b-card
      style=""
      class="align-content-center text-center px-5 py-2 my-2"
    >
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
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        rol: null,
      },
      Roles: [
        { text: "Elija uno", value: null },
        "Administrativo",
        "Instructor",
        "SuperAdmin",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      console.log(this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
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
body {
  background-color: #ff6b00;
}
</style>
