<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImage"/>
    <detail-base-info :goodsInfo="goodsInfo" />
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetail,GoodsInfo} from "network/detail";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,DetailSwiper,DetailBaseInfo
    },
    data(){
      return{
        iid : null,
        topImage:[],
        goodsInfo: {}
      }
    },
    created() {
      //保存传入iid
      this.iid = this.$route.params.iid

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res)
        const data = res.result
        this.topImage = data.itemInfo.topImages
        //获取商品信息
        this.goodsInfo = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
        console.log(this.goodsInfo)
      })


    }
  }
</script>

<style scoped>

</style>