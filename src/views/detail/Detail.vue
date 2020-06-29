<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <scroll class="scroll" ref="scroll" :probeType="3" @scroll="title">
      <detail-swiper :topImages="topImage"/>
      <detail-base-info :goodsInfo="goodsInfo" />
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-param :goodsParam="goodsParam" ref="params"/>
      <detail-comment :goodsComment="goodsComment" ref="comment"/>
      <div class="good-list">
        <good-list :goods="goodsRecommend"  ref="recommend"/>
      </div>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import Scroll from "components/common/scroll/Scroll";

  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParam from "./childComps/DetailParam";
  import DetailComment from "./childComps/DetailComment";
  import GoodList from "components/content/goods/GoodList";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from "network/detail";

  import {debounce} from "common/utils";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,DetailSwiper,DetailBaseInfo,Scroll,DetailShopInfo,DetailGoodsInfo,DetailParam,DetailComment,GoodList,DetailBottomBar
    },
    data(){
      return{
        iid : null,
        topImage:[],
        goodsInfo: {},
        shopInfo: {},
        detailInfo:{},
        goodsParam:{},
        goodsComment:{},
        goodsRecommend:[],
        themeTopY: [],
        isActive: 0
      }
    },
    methods: {
      titleClick(index) {
        this.$refs.scroll.scroll.scrollTo(0, -this.themeTopY[index])
      },
      title(position) {
          const positionY = -position.y
          if(positionY >= 0 && positionY < this.themeTopY[1] &&  this.$refs.nav._data.currentIndex !== 0){
            this.$refs.nav._data.currentIndex = 0
          }else if(positionY >= this.themeTopY[1] && positionY < this.themeTopY[2] && this.$refs.nav._data.currentIndex !== 1){
            this.$refs.nav._data.currentIndex = 1
          }else if(positionY >= this.themeTopY[2] && positionY < this.themeTopY[3] && this.$refs.nav._data.currentIndex !== 2){
            this.$refs.nav._data.currentIndex = 2
          }else if(positionY >= this.themeTopY[3] && this.$refs.nav._data.currentIndex !== 3){
            this.$refs.nav._data.currentIndex = 3
          }
      }
    },
    created() {
      //保存传入iid
      this.iid = this.$route.params.iid

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res)
        const data = res.result
        this.topImage = data.itemInfo.topImages
        //获取商品信息
        this.goodsInfo = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.goodsInfo)
        //店铺信息
        this.shopInfo = new Shop(data.shopInfo)
        // console.log(this.shopInfo);
        //商品详情数据
        this.detailInfo = data.detailInfo
        // console.log(this.detailInfo)
        //商品参数
        this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        // console.log(this.goodsParam)
        //评论信息
        if(data.rate.cRate !== 0){
          this.goodsComment = data.rate.list[0]
        }
        // console.log(this.goodsComment)
      })
      getRecommend().then(res =>{
        this.goodsRecommend = res.data.list
        // console.log(res)
      })

      // this.$nextTick(() => {
      //   //根据最新的数据，对应的DOM是已经被渲染出来
      //   //但是图片依然是没有加载完（目前获取到的offsetTop不包含图片）
      //     this.themeTopY = []
      //     this.themeTopY.push(0)
      //     this.themeTopY.push(this.$refs.param.$el.offsetTop)
      //     this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      //     this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      //     console.log(this.themeTopY)
      //     console.log(this.$refs.comment)
      // })
    },
    mounted() {
        const refresh =debounce(this.$refs.scroll.refresh,500)
        const getThemeTopY = debounce(() => {
          if (this.$refs.params) {
            this.themeTopY = []
            this.themeTopY.push(0)
            this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
            this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
            this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)
          }
        })
        this.$bus.$on('imageOnload',() => {
          refresh()
          getThemeTopY()
        })
    }
  }
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    background-color: #fff;
    z-index: 100;
  }
  .scroll{
    height: calc(100% - 98px);
    overflow: hidden;
  }
  .good-list{
    padding: 0.7rem 0;
  }
</style>