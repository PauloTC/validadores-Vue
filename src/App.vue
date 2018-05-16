<template>
  <div id="app">
    <v-app>
      <v-content>
        <!-- <HelloWorld /> -->
        <Card/>
      </v-content>
    </v-app>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Card
  }
}
</script>

<style>

</style>
