<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <cart-list></cart-list>
        <cart-bottom-bar/>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

//1.导入   mapGetters仅仅将store中的getter映射到局部的计算属性
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
      components:{
        NavBar,CartList,CartBottomBar
      },
      computed:{
//2.导入
        ...mapGetters(['cartLength'])
      }
  }
</script>

<style scoped>
    .nav-bar{
        background-color: var(--color-tint);
        color: #f2f5f8;
    }
    .cart{
        height: 100vh;
    }
</style>
