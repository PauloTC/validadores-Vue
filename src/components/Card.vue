<template>
  <div class="card-container">
    
    <h3> {{ nombre }} </h3>
    <button v-on:click="agregartarea" v-if="btntarea" >Añadir una tarea</button>
    <ul>
        <v-layout row v-for="tarea in tareas" 
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

             <v-flex xs4>
                <v-btn v-on:click="editartarea(tarea.id)" depressed small color="warning">Editar</v-btn>            
                <v-btn v-on:click="grabarnuevatarea(tarea.id,tarea.nuevotexto)" depressed small color="primary">Guardar Cambios</v-btn>
             </v-flex>
        </v-layout>
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

  import { required } from 'vuelidate/lib/validators'

  export default {

    validations: {
      nuevotexto: { required }
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
      editartarea(index){
        this.tareas[index].readonly = false
      },
      grabarnuevatarea(index,nuevotexto){
        this.tareas[index].text = nuevotexto
        this.tareas[index].readonly = true
        this.tareas[index].nuevotexto = ""
      }
    }
  }
</script>
<style scoped >

</style>
