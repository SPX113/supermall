<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      {{detailInfo.desc}}
    </div>
    <div class="info-image">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" :key="index" @load="imageOnload">
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageOnload(){
        this.$bus.$emit('imageOnload')
      }
    }
  }
</script>

<style scoped>
  .goods-info{
    padding: 0 0.7rem;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc{
    font-size: 0.9rem;
    padding: 0.7rem 0;
    border-bottom: 2px solid #f2f5f8;
  }
  img{
    width: 100%;
  }

</style>