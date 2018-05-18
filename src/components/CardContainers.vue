<template>

    <div class="card-container">
      <v-flex xs4 >

        <v-text-field
          v-bind:placeholder = "CardContainer.nombre"
          > 
        </v-text-field>

        <v-layout >
          <v-flex xs12>
            <Card 
              v-for="tarea in tareas" 
              :tarea="tarea"
              :key = "tarea.id"
              @clicked="eliminarCard"
            >
          </Card>  
          </v-flex>

        </v-layout>

        <button v-if="CardContainer.btnAgregar" v-on:click="agregartarea(CardContainer.id)" >Añadir una tarea</button>

        <v-form  @submit="submit" v-if="CardContainer.btntarea" >
          <v-flex xs12>
            <v-text-field 
              v-model="tareatext" 
              box multi-line label=""
              >
            </v-text-field>
            <v-flex xs10 offset-xs1>
              <v-btn v-if="tareatextlength" v-on:click="submit" color="success">GUARDAR</v-btn>
              <v-btn v-on:click="cerrarCajaTexto(CardContainer.id)" color="error">CERRAR</v-btn>        
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
    Card
  },
  data(){
    return {
        tareas: [
        ],
    }
  },
  methods: {
    agregartarea(item) {
       this.$emit('agregarT', item)
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
    cerrarCajaTexto(item){
      this.$emit('cerrarT', item)
    },
    eliminarCard(val) {
      const that = this
      this.tareas.filter(function(tarea, index){
       if(tarea.id == val) {
         that.tareas.splice(index,1)
       }
      })
      
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
