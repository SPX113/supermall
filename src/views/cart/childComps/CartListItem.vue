<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-button :ischecked="itemInfo.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" >
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import checkButton from 'components/content/checkButton/CheckButton'
  export default {
    name: "CartListItem",
    components:{
      checkButton
    },
    props:{
      itemInfo:{
        type : Object,
        default(){
          return {}
        }
      },
      index:Number
    },
    methods:{
      checkClick(){
        this.$store.commit('buyChecked',this.index)
      }
    }
  }
</script>

<style scoped>
  .shop-item{
    display: flex;
    border-bottom: #f2f5f8 2px solid;
    padding: 0.5rem 0;
    height: 6rem;
  }
  .item-selector{
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
  }
  .item-img{
    width: 25%;
    padding-right: 0.5rem;
  }
  .item-img img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.3rem;
  }
  .item-info{
    width: 60%;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 0.7rem;
  }
  .item-title{
    font-size: 1.2rem;
    color: black;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0.2rem 0 0.7rem;
  }
  .item-desc{
    font-size: 0.8rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .info-bottom{
    padding-top: 0.7rem;
    font-size: 1rem;
  }
   .left{
    color: orangered;
  }
</style>