<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
    <div class="title">{{goodsInfo.title}}</div>
    <span class="new-price">{{goodsInfo.newPrice}}</span><span class="old-price">{{goodsInfo.oldPrice}}</span>
    <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span></span>
    <div class="columns">
      <span class="left">{{goodsInfo.columns[0]}}</span>
      <span class="center">{{goodsInfo.columns[1]}}</span>
      <span class="right">{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in goodsInfo.services.length-1" :key="index" class="servicesItem">
        <img v-if="goodsInfo.services[index-1].icon" :src="goodsInfo.services[index-1].icon">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .base-info{

  }
  .title{
    font-size: 1.2rem;
    text-indent: 0.8rem;
    padding: 0.5rem;
  }
  .new-price{
    padding-left:0.7rem;
    color: var(--color-tint);
    font-size: 1.2rem;
  }
  .old-price{
    padding-left: 0.7rem;
    text-decoration: line-through;
    color : #999999;
    padding-right: 0.4rem;
    font-size: 0.5rem;
  }
  .discount{
    color: white;
    background-color: var(--color-high-text);
    border-radius: 5px;
    padding: 0.2rem;
  }
  .columns{
    display: flex;
    padding: 1.2rem 0.6rem 0.9rem;
    color: #999999;
    font-size: 0.8rem;
  }
  .servicesItem{
    flex: 1;
  }
  .right{
    text-align: right;
  }
  .services{
    display: flex;
    padding: 0.7rem;
    font-size: 0.9rem;
    overflow: hidden;
  }
  .services img{
    width: 0.9rem;
    height: 0.9rem;
  }
  .services span{
   flex: 1;
  }
  .services span:last-child{
    text-align: right;
  }

</style>