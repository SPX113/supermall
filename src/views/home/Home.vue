<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center" >购物街</div>
        </nav-bar>
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"  ref="tabControl1"  class="tab-control" v-show="isTabShow"/>
        <scroll class="content" ref="scroll"
                :probe-type="3" @scroll="scroll"
                :pullUpLoad="true" @pullingUp="loadMore">

            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"  ref="tabControl2" />
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

  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {debounce} from "common/utils";
  import {backTopMixin} from "common/mixin";


  export default {
    name: "Home",
    components:{
        NavBar, HomeSwiper, HomeRecommendView, FeatureView,
        TabControl, GoodList, Scroll
      },
      mixins:[backTopMixin],
      data(){
        return{
            banners:null,
            recommends:null,
            goods:{
                'pop':{page: 0,list:[],y:0},
                'new':{page: 0,list:[],y:0},
                'sell':{page: 0,list:[],y:0}
            },
            currentType:'pop',
            tabOffsetTop: 0,
            isTabShow : false,
            saveY : 0
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
      mounted() {
          //3.监听item中图片加载完成
          const refresh =debounce(this.$refs.scroll.refresh,200)
          this.$bus.$on('itemImageLoad',() => {
              refresh()
          })

          //获取tabContorl的OffsetTop
          //所有的组件都有一个属性$el:用于获取组件元素
      },
      // activated() {
      //   this.$refs.scroll.scroll.scrollTo(0,this.saveY)
      //   this.$refs.scroll.scroll.refresh()
      // },
      // deactivated() {
      //   this.saveY = this.$refs.scroll.scroll.y
      // },
      methods:{
        /*
        *事件相关
        */
          //防抖动函数



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
            this.$refs.tabControl1.currentindex = index
            this.$refs.tabControl2.currentindex = index
            //标签的记忆滚动轴跳转
            this.$refs.scroll.scroll.refresh()
            this.$refs.scroll.scroll.scrollTo(0,this.goods[this.currentType].y)
        },
        scroll(possition){
            //1.判断BackTop是否显示
            this.listenShow(possition)
            //2.决定tabControl是否吸顶
            this.isTabShow = (-possition.y) > this.tabOffsetTop

            //记录标签的y值
            if (possition.y < this.tabOffsetTop)
            {
                this.goods[this.currentType].y = possition.y
            }

        },
        loadMore(){
          this.getHomeGoods(this.currentType)
        },
        swiperImageLoad(){
            setTimeout(()=>{
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
                this.goods['pop'].y = -this.tabOffsetTop
                this.goods['new'].y = -this.tabOffsetTop
                this.goods['sell'].y = -this.tabOffsetTop
            },200)

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
        position: relative;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #f6f6f6;
    }
    .content{
        /*height: calc(100% - 93px );*/
        /*overflow: hidden;*/
        /*position: absolute;*/

        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .tab-control{
        position: relative;
        z-index: 9;
        background-color: white;
    }
</style>
