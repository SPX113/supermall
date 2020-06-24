<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center" >购物街</div>
        </nav-bar>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll" :pullUpLoad="true" @pullingUp="loadMore">
            <home-swiper :banners="banners"></home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ></tab-control>
            <good-list :goods="showGoods"></good-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "views/home/childComps/FeatureView";

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from "components/content/tabControl/TabControl";
  import GoodList from "components/content/goods/GoodList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/common/backTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "network/home";


  export default {
    name: "Home",
    components:{
        NavBar, HomeSwiper, HomeRecommendView, FeatureView,
        TabControl, GoodList, Scroll, BackTop
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
            currentType:'pop',
            isShowBackTop : false
        }
      },
      computed:{
        showGoods(){
            return this.goods[this.currentType].list;
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
        /*
        *事件相关
        */
        tabClick(index){
            switch (index) {
                case 0:
                    this.currentType='pop'
                    break;
                case 1:
                    this.currentType='new'
                    break;
                case 2:
                    this.currentType='sell'
                    break;
            }
        },
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,1000)
        },
        scroll(possition){
            this.isShowBackTop = possition.y < -1200
        },
        loadMore(){
          this.getHomeGoods(this.currentType)
        },


        /*

        *网络请求相关
         */
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

                this.$refs.scroll.scroll.finishPullUp()
              })
          }
      }
  }
</script>

<style scoped>
    #home{
        height: 100vh;
    }
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
    .content{
        height: calc(100% - 93px);
        overflow: hidden;
    }

</style>
