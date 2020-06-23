<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center" >购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";

  import {getHomeMultidata} from "network/home";


  export default {
    name: "Home",
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView
      },
      data(){
        return{
            banners:null,
            recommends:null,
            keywords:null,
            dKeywords:null
        }
      },
     created() {
        //1.请求多个数据
         getHomeMultidata().then(res => {
             console.log(res);
             this.banners = res.data.banner.list;
             this.recommends =res.data.recommend.list;
             this.keywords =res.data.keywords;
             this.dKeywords=res.data.dKeyword;

         })
     }
  }
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-tint);
        color: #f6f6f6;
        font-size: 1rem;
    }

</style>
