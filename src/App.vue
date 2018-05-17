<template>
  <div id="app">
    <v-app>
      <v-content>
        <CardContainer/>
      </v-content>
    </v-app>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import CardContainer from './components/CardContainer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CardContainer
  }
}
</script>

<style>

</style>
