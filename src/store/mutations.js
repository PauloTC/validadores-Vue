export default {
    increment (state) {
      state.count++
    },
    //APP
    agregarLista(state){
      state.CardContainers.push({
          id: state.cuentaId++,
          nombre: "Colocar un Titulo",
          btntarea: false,
          tareatext: "",
          tareatextlength: false,
          showedit: false,
          inputlength: false,
          btnAgregar: true,
          isActive: false,
          hasError: true,
          tareas: [
          ],
      })
    },
    //CARD-CONTAINER
    cerrarTexto(state, value){
      const $Container = state.CardContainers[value]
      $Container.btnAgregar = true,
      $Container.btntarea = false,
      $Container.tareatext = ""
    },
    agregarTarea(state,value){
      state.CardContainers[value].btntarea = true
      state.CardContainers[value].btnAgregar = false
    },
    submit(state, value){
      state.CardContainers[value].tareatext = ""
    },
    agregaValores(state , value){
      state.CardContainers[value.id].tareas.push({
          id: value.idtext,
          readonly : true,
          text : value.text
      })
      state.CardContainers[value.id].tareatext =""
    },
    borrarTarea(state, value){
      state.CardContainers[value.id].tareas.filter(function(obj, index){
        if( obj.id == value.textid ){
          state.CardContainers[value.id].tareas.splice(index,1)
        }
      })
    },
    escucharTexto( state,value ){
      if(value.text.length > 0){
        state.CardContainers[value.id].isActive = true
        state.CardContainers[value.id].hasError = false
      }else{
        state.CardContainers[value.id].isActive = false
        state.CardContainers[value.id].hasError = true    
      }
    }

}