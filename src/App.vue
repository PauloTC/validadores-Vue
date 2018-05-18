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
            @borrarT="borrarTarea"
            @limpiaT="limpiarTexto"
            @pasarValores="pasarValores"
          >
          </CardContainers>
          <button class="nueva-lista" v-on:click="agregarLista" >Añadir nueva lista</button>
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
      cuentaId: 0,
      CardContainers: [
       
      ]
    }
  },
  methods: {
    agregarTarea(val){
        console.log(val)
        this.CardContainers[val].btntarea = true
        this.CardContainers[val].btnAgregar = false
    },
    cerrarTexto(val){
      this.CardContainers[val].btnAgregar = true,
      this.CardContainers[val].btntarea =  false
      this.CardContainers[val].tareatext = ""
    },
    limpiarTexto(val){
      this.CardContainers[val].tareatext = ""
    },
    pasarValores(val, item, id){
      console.log(item)
      console.log(val)
      console.log(id)
      this.CardContainers[val].tareas.push({
        id: id,
        text : item,
        readonly : true
      })
    },
    borrarTarea(item,val){
      const that = this
      this.CardContainers[val].tareas.filter(function(obj, index){
          if( obj.id == item ){
              that.CardContainers[val].tareas.splice(index,1)
          }
      })
    },
    agregarLista(){
      this.CardContainers.push({
          id: this.cuentaId++,
          nombre: "Colocar un Titulo",
          btntarea: false,
          tareatext: "",
          tareatextlength: false,
          showedit: false,
          cuentaId: 0,
          inputlength: false,
          btnAgregar: true,
          tareas: [
          ],
      })
    }
  }
}
</script>

<style>
  .content--wrap {
    display: flex;
  }
  .card-container{
    flex: 1;
    padding: 0px 10px;
    margin-top: 30px;
    background: #e2e4e6;
    max-width: 300px;
  }
  .nueva-lista{
    align-self: flex-start;
  }
</style>
