<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImage"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail} from "network/detail";

  import DetailSwiper from "./childComps/DetailSwiper";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,DetailSwiper
    },
    data(){
      return{
        iid : null,
        topImage:[]
      }
    },
    created() {
      //保存传入iid
      this.iid = this.$route.params.iid

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res)
        this.topImage = res.result.itemInfo.topImages
        console.log(this.topImage)
      })
    }
  }
</script>

<style scoped>

</style>