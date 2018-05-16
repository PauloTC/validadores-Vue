<template>
  <div id="app">
    <v-app>
      <v-content>
        <HelloWorld />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
