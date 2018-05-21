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
    cerrarTexto(state){
      state.CardContainers[0].btnAgregar = true,
      state.CardContainers[0].btntarea = false,
      state.CardContainers[0].tareatext = ""
    }
}