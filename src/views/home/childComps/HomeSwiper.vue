<template>
  <swiper :options="myOptions"  class="banners">
    <swiper-slide v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>  <!-- 箭头左 -->
    <div class="swiper-button-next" slot="button-next"></div>  <!-- 箭头右 -->
  </swiper>
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
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
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
    /*height: 194px;*/
    height: 35vh;
    width: 100%;
  }
  .banners img{
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    max-width: 100%;
    max-height: 100%;
  }
  .swiper-button-prev{

    color: rgba(0,0,0,0.4);

  }
  .swiper-button-next {
    color: rgba(0,0,0,0.4);
  }
  >>>.swiper-pagination-bullet{
    background-color: white;
    outline:0 none !important; blr:expression(this.onFocus=this.blur());
  }
</style>