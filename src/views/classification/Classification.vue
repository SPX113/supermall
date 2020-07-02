<template>
    <van-grid square icon-size="47">
      <van-grid-item v-for="(item,index) in goods" :icon="item.image" icon-size="100"
                     :key="index" :text="item.title" :url="item.link"/>
    </van-grid>
</template>

<script>
  import {getClass} from "network/category";

  export default {
    name: "Classification",
    data(){
      return{
        goods:[]
      }
    },
    created() {
      this.maitKey = this.$route.params.maitKey
      getClass(this.maitKey).then(res => {
        this.goods = res.data.list
        console.log(this.goods)
      })
    }
  }
</script>

<style scoped>
  .van-grid{
    z-index: 11;
    background-color: white;
    height: 100vh;
  }

</style>