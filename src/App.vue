<template>
  <div id="app">
    <v-app>
      <v-content>
        <CardContainers
          v-for="CardContainer in CardContainers"
          :key = "CardContainer.id"
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
    CardContainer
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
