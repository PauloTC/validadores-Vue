<template>
  <div>
    <v-layout  v-model="CardTarea" >
      <v-text-field
        id="InputValue"
        v-bind:placeholder="tarea.text" 
        :readonly="tarea.readonly" 
        v-model="tarea.text"
        color="red"
          >
        {{ tarea.id }}
      </v-text-field>
      <v-flex>
        <v-btn v-on:click="editartarea()" depressed small color="warning">Editar</v-btn>            
        <v-btn v-if="inputLength" v-on:click="grabarnuevatarea()" depressed small color="primary">Guardar Cambios</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>




<script>

  export default {
    props : {
      tarea: Object

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

        // tarea.readonly = true
        // if( this.tareas[index].nuevotexto.length == 0 ) {
        //     this.tareas[index].nuevotexto = this.tareas[index].text 
        // }else{
        //   this.tareas[index].text = nuevotexto
        //   this.tareas[index].nuevotexto = ""
        // }
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

</style>
