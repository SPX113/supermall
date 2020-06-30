export default {
  addCart(context,playload){
    let oldProduct = context.state.cartList.find(item => item.iid === playload.iid)

    if(oldProduct){
      context.commit('addCounter',oldProduct)
    }else{
      playload.count = 1
      context.commit('addToCart',playload)
    }

  }
}