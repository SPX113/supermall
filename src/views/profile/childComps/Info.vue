<template>
  <div class="info">
    <div class="main">
      <div class="head">
        <img src="~assets/img/common/placeholder.png" >
        <span>登陆/注册</span>
      </div>
      <van-cell-group>
        <van-cell title="我的订单" value=">" />
        <van-cell title="关注店铺" value=">" />
        <van-cell title="售后服务" value=">" />
        <van-cell title="收藏夹" value=">" />
        <van-cell title="卡包" value=">" />
        <van-cell title="设置" value=">"  />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Info"
  }
</script>

<style scoped>
  .info{
    background-color: #f2f5f8;
  }
  .main{
    width: 90%;
    margin: 0 auto;
    background-color: white;
    height: calc(100vh - 44px - 49px);
  }
  .head{
    display: flex;
    align-items: center;
  }
  .head img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 10px 30px ;
  }
  .head span{
    font-size: 20px;
    line-height: 70px;
  }

</style>