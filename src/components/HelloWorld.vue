<template>

    <!-- <span class='visa-banner' ></span> -->
    <v-form @submit.prevent="submit" v-bind:class="{ 'form-group--error': $v.email.email.$error }" action="">
      
      <v-text-field
        v-model.trim="email"
        @input="$v.email.$touch()"
        label="Email"
        :error-messages="emailErrors"
        required
        @blur="$v.email.$touch()"
      ></v-text-field>


       <v-text-field
        v-model.trim="password"
        @input="$v.password.$touch()"
        label="Password"
        :error-messages="passwordErrors"
        required
        @blur="$v.password.$touch()"
        type = "password"
      ></v-text-field>
    
        <!-- <pre>pass: {{ $v.password }}</pre> -->

      <v-btn @click="$v.$touch"  block color="secondary" dark>Login</v-btn>
      <v-flex xs8>
        <v-text-field
          id="testing"
          name="input-1"
          label="Label Text"
        ></v-text-field>
      </v-flex>
    </v-form>

</template>


<script>

import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  validations: {
    email: {
      email,
      required
    },
    password: { required, minLength: minLength(6) }
  },

  data () {
    return {
      password: '',
      email: '',
      valilMail: false,
    }
  },
  methods: {
    submit() {

    },
    validador(){
      console.log("se valida")
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('debe ser un e-mail valido')
      !this.$v.email.required && errors.push('E-mail es requerido')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Debe tener como minimo 6 caracteres')
      !this.$v.password.required && errors.push('Password es requerido')
      return errors
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
    .form-group__message {
      font-size: 12px;
      color: tomato;
    }

    .input-group__details {
      display: none !important ;
    }
    /* .form-group span{
      display: block;
      color: #f57f6c;
    } */
</style>
