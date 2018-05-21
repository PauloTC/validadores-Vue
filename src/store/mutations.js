export default {
    increment (state) {
      state.count++
    },
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
    cerrarTexto(state, value){
      state.CardContainers[value].btnAgregar = true,
      state.CardContainers[value].btntarea = false,
      state.CardContainers[value].tareatext = ""
    }
}