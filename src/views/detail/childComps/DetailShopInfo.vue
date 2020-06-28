<template>
  <div class="shop-info">
    <div class="top">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="detail">
      <div class="left">
        <div class="left-item">
          <p class="num">{{cell}}万</p>
          <p >总销量</p>
        </div>
        <div class="left-item">
          <p class="num">{{shopInfo.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <p v-for="(item,index) in shopInfo.scores" :key="index">{{item.name}}
          <span class="miaoshu" :class="{isBetter :shopInfo.scores[index].isBetter }">{{item.score}}</span> </p>
      </div>
    </div>
    <div class="jdgg">进店逛逛</div>

  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      cell(){
        return (this.shopInfo.cells/10000).toFixed(1)
      }
    }
  }
</script>

<style scoped>
  .top{
    font-size: 1rem;
    padding: 0.7rem;
    color: #999999;
  }
  .top span{
    position: relative;
    top:-1rem;
  }
  .top img{
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius:50%
  }
  .detail{
    text-align: center;
    font-size: 0.9rem;
    height: 6rem;
  }
  .left{
    display: flex;
    width: 50%;
    border-right: #f2f5f8 solid 2px;
    padding-left: 0.7rem;
  }
  .right{
    width: 50%;
    text-align: justify;
    padding-left: 10%;
  }
  .left-item{
    flex: 1;
  }
  .num{
    font-size: 1.2rem;
    padding:0.7rem 0 0.7rem;
  }
  .miaoshu{
    padding-left: 0.7rem;
  }
  .right p{
    padding: 0.2rem;
  }
  p>span{
    color: green;
  }
  .isBetter{
    color: red;
  }
  .jdgg{
    border-bottom: #f2f5f8 solid 5px;
    color: #999999;
    text-align: center;
    padding-bottom: 1rem;
    font-size: 0.8rem;
  }
</style>