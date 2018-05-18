<template>
  <div id="app">
    <v-app>
      <v-content>
        <CardContainers
          v-for="cardContainer in CardContainers"
          :CardContainer="cardContainer"
          :key = "cardContainer.id"
          @agregarT="agregarTarea"
          @cerrarT="cerrarTexto"
        >
        </CardContainers>
          
      </v-content>
    </v-app>
  </div>
</template>

<script>

import CardContainers from './components/CardContainers.vue'

export default {
  name: 'app',
  components: {
    CardContainers
  },
  data(){
    return{
     CardContainers: [
       {
         id: 0,
        nombre: "Lista de Tareas",
        btntarea: false,
        tareatext: "",
        tareatextlength: false,
        showedit: false,
        cuentaId: 0,
        inputlength: false,
        btnAgregar: true,
        },
         {
           id: 1,
          nombre: "En Proceso",
          btntarea: false,
          tareatext: "",
          tareatextlength: false,
          showedit: false,
          cuentaId: 0,
          inputlength: false,
          btnAgregar: true,
        }
     ]
    }
  },
  methods: {
    agregarTarea(val){
        this.CardContainers[val].btntarea = true
        this.CardContainers[val].btnAgregar = false
    },
    cerrarTexto(val){
      this.CardContainers[val].btnAgregar = true,
      this.CardContainers[val].btntarea =  false
      this.CardContainers[val].tareatext = ""
    }
  }
}
</script>

<style>

</style>
