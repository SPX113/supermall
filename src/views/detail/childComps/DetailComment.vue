<template>
  <div v-if="Object.keys(goodsComment).length !== 0" class="detail-comment">
    <div class="comment-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="comment-user">
      <img :src="goodsComment.user.avatar" >
      <span class="username">{{goodsComment.user.uname}}</span>
    </div>
    <div class="comment">
      {{goodsComment.content}}
    </div>
    <div class="comment-detail">
      <span>{{this.goodsComment.created|showDate}}</span><span>{{goodsComment.style}}</span>
    </div>
    <div class="image" v-if="goodsComment.images">
      <img v-for="(item,index) in goodsComment.images" :src="item" :key="index" @click="open(item)">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailComment",
    props:{
      goodsComment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value){
          let date = new Date(value*1000);
          let YY = date.getFullYear() + '-';
          let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          let DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
          return YY + MM + DD
      }
    },
    methods:{
      open(item){
        window.open(item,'_blank');
      }
    }
  }
</script>

<style scoped>
  .comment-header{
    border-top: 3px #f2f5f8 solid;
    display: flex;
    padding: 1rem 1rem 1rem;
    font-size: 0.8rem;
    border-bottom: 2.5px #f2f5f8 solid;
  }
  .header-title,.header-more{
    flex: 1;
  }
  .header-more{
    text-align: right;
  }
  .comment-user{
    padding: 0.5rem 0.5rem 0.2rem;
  }
  .comment-user img{
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }
  .username{
    font-size: 0.8rem;
    position: relative;
    bottom:1rem
  }
  .comment{
    padding: 0.7rem;
    font-size: 0.7rem;
  }
  .comment-detail{
    padding: 0.2rem 0.7rem 0.5rem;
    color: #999999;
    font-size: 0.7rem;
  }
  .comment-detail span{
    padding-right: 0.7rem;
  }
  .image{
    padding: 0.3rem 0.7rem 1rem;
    border-bottom: #f2f5f8 3px solid;
  }
  .image img{
    height: 7rem
  }
  .detail-comment{
    padding-bottom: 1rem;
    border-bottom: #f2f5f8 5px solid;
  }
</style>