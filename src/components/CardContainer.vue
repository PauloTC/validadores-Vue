<template>
  <div class="card-container">
    
    <h2> {{ nombre }} </h2>

    <v-layout >
      <v-flex xs12>
        <Card 
          v-for="tarea in tareas" 
          :tarea="tarea"
          :key = "tarea.id"
        >
      </Card>  
      </v-flex>

    </v-layout>

    <button v-if="btnAgregar" v-on:click="agregartarea" >Añadir una tarea</button>

    <v-form  @submit="submit" v-if="btntarea" >
      <v-flex xs4>
        <v-text-field 
          v-model="tareatext" 
          box multi-line label=""
          >
        </v-text-field>
        <v-btn v-if="tareatextlength" v-on:click="submit" color="success">GUARDAR</v-btn>
        <v-btn v-on:click="cerrarCajaTexto" color="error">CERRAR</v-btn>        
      </v-flex>  
    </v-form>
  </div>
</template>

<script>
  
import Card from './Card.vue'


export default {
  components: {
    Card
  },

  data(){
    return {
      nombre: "Lista de Tareas",
      tareas: [
      ],
      btntarea: false,
      tareatext: "",
      tareatextlength: false,
      showedit: false,
      cuentaId: 0,
      inputlength: false,
      btnAgregar: true,
    }
  },
  methods: {
    agregartarea() {
      this.btntarea = true
      this.btnAgregar = false
    },
    submit(){
      this.tareas.push({
        id: this.cuentaId++,
        text: this.tareatext,
        readonly: true,
        }
      )
      this.tareatext = ""
    },
    cerrarCajaTexto(){
      this.btnAgregar = true,
      this.btntarea =  false
      this.tareatext = ""
    }
  },
  watch: {
    tareatext: function() {
      if(this.tareatext.length > 0 ) {
        this.tareatextlength = true
      }else{
        this.tareatextlength = false          
      }
    },
  }
}  


</script>

<style>

</style>
