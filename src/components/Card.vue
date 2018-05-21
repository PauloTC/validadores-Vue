<template>
  <div>
    <v-card>
      <v-flex xs12>

        <v-text-field class="input-field"
          v-bind:class="{ active: isActive, 'text-danger': hasError }"
          v-bind:placeholder="tarea.text" 
          :readonly="tarea.readonly" 
          v-model="tarea.text"
          solo-inverted
          append-icon="more_vert"
            > 
          {{tarea}}
        </v-text-field>
      </v-flex>
      <v-flex class="button-container" xs12>
        
        <v-btn v-on:click="editartarea()"  small color="warning">Editar</v-btn>            

        <v-btn v-if="inputLength" v-on:click="grabarnuevatarea()"  small color="primary">Guardar Cambios</v-btn>

        <v-btn v-on:click="eliminartarea(tarea.id)"  small color="error">Eliminar</v-btn>

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
        inputLength: true
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
        console.log(value)
        this.$emit('borrarT',value)
        
      },
    },  
    watch: {
      CardTarea: function(){

        let $input = document.getElementById('InputValue').value

        if($input.length == 0 ){
          this.inputLength = false
        } else {
          this.inputLength = true
        }
        
      }
    },
  }  
 
</script>
<style>
.input-field i{
  cursor: pointer;
}
</style>
