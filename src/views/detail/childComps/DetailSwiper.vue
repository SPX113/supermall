<template>
  <swiper class="size" :options="swiperOption">
    <swiper-slide v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "DetailSwiper",
    components:{
      Swiper,SwiperSlide
    },
    props:{
      topImages:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        isLoop : true,
        swiperOption: {
          loop: this.topImages.length > 1,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
            // bulletClass:'swiper-pagination-bullet'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .size{
    width: 100%;
    height: 300px;
    text-align: center;
  }
  .size img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  >>> .swiper-pagination-bullet {
    background-color: black;
    outline:0 none !important; blr:expression(this.onFocus=this.blur());
  }
  >>> .swiper-pagination-bullet-active {
    background-color: orangered;
    outline:0 none !important; blr:expression(this.onFocus=this.blur());
  }

</style>