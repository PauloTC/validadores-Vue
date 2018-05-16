<template>
  <div class="visa-container" >
    <!-- <span class='visa-banner' ></span> -->
    <form @submit.prevent="submit" v-bind:class="{ 'form-group--error': $v.email.email.$error }" action="">
      <div class="form-group" v-bind:class="{ 'form-group--error': $v.email.$error }">
        <label class="form__label" for="">Email</label>
        <input  class="form__input" v-model.trim="email"  @input="$v.email.$touch()">
        <span class="form-group__message" v-if="!$v.email.required && $v.email.$dirty">Campo Requerido</span>
        <span class="form-group__message" v-if="!$v.email.email">Este no es un {{$v.email.$params.email.type}} valido.</span>
        <pre>email: {{ $v.email }}</pre>
      </div>

      <div class="form-group" v-bind:class="{ 'form-group--error': $v.password.$error }">
        <label class="form__label"  for="">Contrasena</label>
        <input type="text"  v-model.trim="password"  @input="$v.password.$touch()">
        <span class="form-group__message" v-if="!$v.password.required && $v.password.$dirty">Campo Requerido</span>
          <span class="form-group__message" v-if="!$v.password.minLength">Debe tener como minimo {{$v.password.$params.minLength.min}} caracteres.</span>
        <pre>pass: {{ $v.password }}</pre>
      </div>

      <button @click="$v.$touch">LOGIN</button>
    </form>

  </div>
</template>


<script>

import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      password: '',
      email: '',
      valilMail: false
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    submit() {

    },
    validador(){
      console.log("se valida")
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .login-template{
      display: flex;
      align-items: center;
    }
  .form-validation{
      display: flex;
      flex-direction: column;
    }
  .visa-container{
    display: flex;
    align-items: center;
  }
    .form-group{
      display: flex;
      flex-direction: column;
    }
    .visa-banner{
      height: 100vh;
      width: 80%;
      display: block;
      background-image: url('../assets/visanet.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    /* .form-group span{
      display: block;
      color: #f57f6c;
    } */
</style>
