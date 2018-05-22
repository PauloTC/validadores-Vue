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
    }
}