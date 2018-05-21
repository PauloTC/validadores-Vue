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
        
        <button class="agregarTarea" v-if="CardContainer.btnAgregar" v-on:click="agregartarea(CardContainer.id)" >Añadir una tarea</button>

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
              <v-btn v-on:click="submit(CardContainer.tareatext)" color="success">GUARDAR</v-btn>
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
    Card,
  },
  data(){
    return {
    }
  },
  methods: {
    agregartarea(item) {
      console.log(item)
      this.$emit('agregarT', item)
    },
    submit(item){
      this.$emit('limpiaT',this.CardContainer.id),
      this.$emit('pasarValores', this.CardContainer.id, item ,Date.now())
    },
    cerrarCajaTexto(item){
      this.$emit('cerrarT', item)
    },
    eliminarCard(item) {
      console.log(item, this.CardContainer.id)
      this.$emit('borrarT', item ,this.CardContainer.id)
    },
    escucharText(){
      // $textBox = document.getElementById(textBox)
      this.$emit('validarT', this.CardContainer.tareatext,this.CardContainer.id)
      // if ($textBox.lenght > 0){
      //   console.log("hay contenido")
      // }else {
      //   cnsole.log("no hay contenido")
      // }
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
  }
  .text-danger{
    background: tomato;
  }
</style>
