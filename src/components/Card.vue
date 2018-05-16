<template>
  <div class="card-container">
    
    <h3> {{ nombre }} </h3>
    <button v-on:click="agregartarea" v-if="btntarea" href="">Añadir una tarea</button>
    <ul>
      <v-flex xs8>
        <li v-for="tarea in tareas"
            v-bind:key= "tarea.id">
            <v-text-field
              v-bind:title="tareas.text" id="testing"
              name="input-1" 
              :label="tarea.text" 
              :readonly="tarea.readonly" 
              v-model="tarea.nuevotexto"
               >
              {{ tarea.id }}
            </v-text-field>
            <button v-on:click="editartarea(tarea.id)">
              <v-icon color="grey lighten-1">star_border</v-icon>
            </button>
            <v-btn v-on:click="grabarnuevatarea(tarea.id,tarea.nuevotexto)" depressed small color="primary">Guardar</v-btn>
        </li>
      </v-flex>
    </ul>
    <v-form  @submit="submit" v-if="!btntarea" >
      <v-flex xs12>
        <v-text-field 
          v-model="tareatext" 
          box multi-line label="">
        </v-text-field>
        <v-btn v-on:click="submit" color="success">GUARDAR</v-btn>
      </v-flex>  
    </v-form>
  </div>
</template>
<script>

  // import { required } from 'vuelidate/lib/validators'

  export default {

    validations: {
      tareatext : {
      }
    },

    data(){
      return {
        nombre: "Lista de Tareas",
        btntarea: true,
        tareatext: "",
        showedit: false,
        cuentaId: 0,
        tareas: [
        ],
      }
    },
    methods: {
      agregartarea() {
        console.log("se agrega nueva tarea")
        this.btntarea = false
      },
      submit(){
        this.tareas.push({
          id: this.cuentaId++,
          text: this.tareatext,
          readonly: true,
          nuevotexto: "",
          }
        )
        this.tareatext = ""
      },
      editartarea(item){
       console.log(this.tareas[item].readonly)        
        this.tareas[item].readonly = false
       console.log(this.tareas[item].readonly)
      },
      grabarnuevatarea(index,nuevotexto){
        console.log(index,nuevotexto)
        this.tareas[index].text = nuevotexto
        
      }
    }
  }
</script>
<style scoped >

</style>
