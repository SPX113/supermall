<template>
  <div class="shop-info">
    <div class="top">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="detail">
      <div class="left">
        <div class="left-item">
          <p class="num">{{shopInfo.cells}}万</p>
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
    border-bottom: #f2f5f8 solid 5px;
  }
  .left{
    display: flex;
    width: 50%;
    border-right: #999999 solid 1px;
  }
  .right{
    width: 50%;
    text-align: justify;
    padding-left: 12.5%;
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
</style>