<template>

    <div class="card-container">
      <v-flex xs12 >
        <!-- {{CardContainer}} -->
        <v-text-field
          v-bind:placeholder = "CardContainer.nombre"
          > 
        </v-text-field>

        <v-layout >
          <v-flex xs12>
            <Card 
              v-for="tarea in CardContainer.tareas" 
              :tarea="tarea"
              :key = "tarea.id"
              @borrarT="eliminarCard"
            >
          </Card>  
          </v-flex>

        </v-layout>
        
        <button class="agregarTarea" v-if="CardContainer.btnAgregar" v-on:click="agregarTarea(CardContainer.id)" >Añadir una tarea</button>

        <v-form  @submit="submit" v-if="CardContainer.btntarea" >
          <v-flex xs12>
            <v-text-field 
              id="textBox"
              v-model="CardContainer.tareatext"
              v-bind:class="{ active: CardContainer.isActive, 'text-danger': CardContainer.hasError }"
              box multi-line label="" 
              @clicked="eliminarCard"
              :onkeyup="escucharText()"
              >
            </v-text-field>
            <v-flex xs10 offset-xs1>
              <v-btn v-on:click="agregaValores()" color="success">GUARDAR</v-btn>
              <v-btn v-on:click="cerrarTexto()" color="error">CERRAR</v-btn>        
            </v-flex>
          </v-flex>  
        </v-form> 

      </v-flex>
    </div>

</template>

<script>
import Card from './Card.vue'


export default {
  props : {
    CardContainer: Object,
  },
  components: {
    Card,
  },
  data(){
    return {
    }
  },
  methods: {
    agregaValores(){
      this.$store.dispatch('agregaValores', {  id : this.CardContainer.id, text: this.CardContainer.tareatext , idtext : Date.now() })
    },
    cerrarTexto(){
      this.$store.dispatch("cerrarTexto",this.CardContainer.id)
    },
    agregarTarea(val) {
      this.$store.commit("agregarTarea",val)
    },
    submit(id,text,textid){
      this.$store.commit("agregaValores",id,text,textid)
    },

    eliminarCard(value) {
      this.$store.dispatch('borrarTarea', {id :this.CardContainer.id, textid: value})
    },
    escucharText(){
      this.$store.dispatch('escucharTexto', {id :this.CardContainer.id, text: this.CardContainer.tareatext})
    }
  }
}  


</script>

<style>
  .agregarTarea{
    line-height: 2;
    color: tomato;
    margin-top: 20px;
  }
  .card-container{
    margin-right: 30px;
    border-radius: 10px
  }
  .text-danger{
    background: tomato;
  }
</style>
