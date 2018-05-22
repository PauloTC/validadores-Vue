<template>
  <div>
    <v-card>
      <v-flex xs12>

        <v-layout row>

          <v-text-field class="input-field"
            v-bind:placeholder="tarea.text" 
            :readonly="tarea.readonly" 
            v-model="tarea.text"
            hide-details
            solo-inverted
            mt-5
              > 
            {{tarea}}
          </v-text-field>
          <v-menu 
            offset-y 
            >
            <v-btn slot="activator"  flat icon color="indigo">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile  >
                <v-list-tile-title v-on:click="editartarea()">Editar</v-list-tile-title>
                <v-list-tile-title v-on:click="grabarnuevatarea()">Guardar</v-list-tile-title>
                <v-list-tile-title v-on:click="eliminartarea(tarea.id)">Eliminar</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-layout>

      </v-flex>
    </v-card>
  </div>
</template>

<script>

  export default {
    props : {
      tarea: Object,
    }, 
    data(){
      return {
        CardTarea : "",
        inputLength: true,
           items: [
            { title: 'Editar'},             
            { title: 'Guardar'},
          ]
      }
    },
    methods: {
      editartarea(){
        this.tarea.readonly = false
      },
      grabarnuevatarea(){

        this.tarea.readonly = true
      },
      eliminartarea(value){
        this.$emit('borrarT',value)
      },
    }
  }  
 
</script>
<style>
  .input-field i{
    cursor: pointer;
  };
  .layout {
    margin-bottom: 10px;
  }
</style>
