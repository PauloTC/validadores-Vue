<template>
  <div>
    <v-card>
      <v-flex xs10 offset-xs1>
        <v-text-field
          id="InputValue"
          v-bind:placeholder="tarea.text" 
          :readonly="tarea.readonly" 
          v-model="tarea.text"
          color="red"
            > 
          {{tarea}}
        </v-text-field>
      </v-flex>
      <v-flex class="button-container"  xs12>
        <v-btn v-on:click="editartarea()" depressed small color="warning">Editar</v-btn>            

        <v-btn v-if="inputLength" v-on:click="grabarnuevatarea()" depressed small color="primary">Guardar Cambios</v-btn>

        <v-btn v-on:click="eliminartarea(tarea.id)" depressed small color="error">Eliminar</v-btn>

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
      eliminartarea(item){
        this.$emit('clicked', item)
      }
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
<style scoped >
  .button-container{
    display: flex;
    justify-content: center;
  }
</style>
