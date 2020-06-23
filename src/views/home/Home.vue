<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center" >购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','精选']"></tab-control>
        <good-list :goods="goods['pop'].list"></good-list>
    </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "views/home/childComps/FeatureView";

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from "components/content/tabControl/TabControl";
  import GoodList from "components/content/goods/GoodList";

  import {getHomeMultidata,getHomeGoods} from "network/home";


  export default {
    name: "Home",
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView,
        FeatureView,
        TabControl,
        GoodList
      },
      data(){
        return{
            banners:null,
            recommends:null,
            goods:{
                'pop':{page: 0,list:[]},
                'new':{page: 0,list:[]},
                'sell':{page: 0,list:[]}
            },
            type:'pop'
        }
      },
     created() {
        //1.请求多个数据
         this.getHomeMultidata()

         //2.请求商品数据
         this.getHomeGoods('pop')
         this.getHomeGoods('new')
         this.getHomeGoods('sell')

     },
      methods:{
        getHomeMultidata(){
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends =res.data.recommend.list;
            })
        },
        getHomeGoods(type){
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page +=1
              })
          }
      }
  }
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-tint);
        color: #f6f6f6;
        position: sticky;
        top: 0;
        z-index:99
    }
    .tab-control{
        position: sticky;
        top:44px;
        background-color: white;
        z-index: 99;
    }

</style>
