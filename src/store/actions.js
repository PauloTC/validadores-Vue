export default {
    agregaValores(  { commit } , value){
      console.log(value)
      commit('agregaValores',value)
    },
    borrarTarea( {commit} , value ){
      commit('borrarTarea',value)
    },
    escucharTexto( {commit}, value ){
      commit("escucharTexto",value)
    },
    cerrarTexto( {commit}, value ){
      commit("cerrarTexto",value)
    }
}