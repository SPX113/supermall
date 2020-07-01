export default {
  addCart(context,playload){
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === playload.iid)
      if(oldProduct){
        context.commit('addCounter',oldProduct)
        resolve('当前的商品数量+1')
      }else{
        playload.count = 1
        context.commit('addToCart',playload)
        resolve('成功添加到购物车')
      }
    })
  }
}