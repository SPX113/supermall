export default {
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,playload){
    playload.checked = true
    state.cartList.push(playload)
  },
  buyChecked(state,playload){
    state.cartList[playload].checked = !state.cartList[playload].checked
  },
  allBuy(state){
    state.cartList.forEach(item => item.checked = false)
  },
  allBuy2(state){
    state.cartList.forEach(item => item.checked = true)
  },
  minus(state,playload){
    if( state.cartList[playload].count > 1){
      state.cartList[playload].count --
    }else{
      state.cartList.splice(playload,1)
    }
  },
  add(state,payload){
    state.cartList[payload].count ++
  }
}