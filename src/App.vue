<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content grid-list-md text-xs-center class="body-container" >
          <v-layout row  wrap >
             <v-flex xs10>
               <v-layout row >
                  <CardContainers  
                    v-for="cardContainer in CardContainers"
                    :CardContainer="cardContainer"
                    :key = "cardContainer.id"
                    @agregarT="agregarTarea"
                    @cerrarT="cerrarTexto"
                    @borrarT="borrarTarea"
                    @validarT="validarTexto" 
                    @limpiaT="limpiarTexto"
                    @pasarValores="pasarValores"
                  />
                </v-layout>
            </v-flex>
            <v-flex xs2>
              <button class="nueva-lista" v-on:click="agregarLista" >Añadir nueva lista</button>
            </v-flex>
          </v-layout>
      </v-content>
    </v-app>
  </div>
</template>

<script>

import CardContainers from './components/CardContainers.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    CardContainers,
    Header
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
    validarTexto(val,index){
      console.log(val)
      if(val.length > 0){
        this.CardContainers[index].isActive = true
        this.CardContainers[index].hasError = false
      }else{
        this.CardContainers[index].isActive = false
        this.CardContainers[index].hasError = true    
      }
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
          isActive: false,
          hasError: true,
          tareas: [
          ],
      })
    }
  }
}
</script>

<style>
  .body-container {
    background: steelblue
  }
  .content--wrap {
    display: flex;
  }
  .card-container{
    flex: 1;
    padding: 0px 10px;
    margin-top: 30px;
    background: #e2e4e6;
    max-width: 300px;
    align-self: flex-start;
  }
  .nueva-lista{
    align-self: flex-start;
  }
</style>
