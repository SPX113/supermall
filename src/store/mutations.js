export default {
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,playload){
    playload.checked = true
    state.cartList.push(playload)
  }
}