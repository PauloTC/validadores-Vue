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
                    @validarT="validarTexto" 
                    @limpiaT="limpiarTexto"
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
import store from './store/'

export default {
  name: 'app',
  store,
  components: {
    CardContainers,
    Header
  },
  data(){
    return{
      cuentaId: 0,
      count: 0,
      CardContainers: [
      ]
    }
  },
  methods: {
    validarTexto(val,index){
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
    agregarLista(){
      this.CardContainers = this.$store.state.CardContainers
      this.cuentaId = this.$store.state.cuentaId
      this.count = this.$store.state.count
      this.$store.commit("agregarLista")
      this.$store.commit("increment")
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
