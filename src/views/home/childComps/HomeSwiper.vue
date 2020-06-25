<template>
  <swiper :options="myOptions"  class="banners">
    <swiper-slide v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>




<!--  <swiper>-->
<!--    <swiper-item v-for="(item,index) in banners" :key="index">-->
<!--      <a :href="item.link">-->
<!--        <img :src="item.image" @load="imageLoad">-->
<!--      </a>-->
<!--    </swiper-item>-->
<!--  </swiper>-->
</template>

<script>
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,SwiperSlide
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isLoad : false,
        myOptions:{
          loop:true,
          autoplay:{
            delay: 4000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          }
        }
      }
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .banners{
    height: 194px;
    width: 100%;
  }
  .banners img{
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    max-width: 100%;
    max-height: 100%;
  }

</style>