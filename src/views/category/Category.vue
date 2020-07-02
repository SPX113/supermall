<template>
  <div>
    <van-grid :border="true" :column-num="3">
      <van-grid-item v-for="(item,index) in list" :key="index" @click="jump(item.maitKey)">
        <div :class="item.icons"></div>
        <span class="title">{{item.title}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import {getCategory} from "network/category";

  export default {
    name: "Category",
    data(){
      return{
        list : []
      }
    },
    methods:{
      jump(maitKey){
        this.$router.push('/class/' + maitKey)
      }
    },
    created() {
      getCategory().then(res =>{
        //分类的图标
        let icons =['iconfont icon-huobao','iconfont icon-shangyi','iconfont icon-kuzi','iconfont icon-qunzi','iconfont icon-neiyi',
        'iconfont icon-nvxie','iconfont icon-ren','iconfont icon-baobao','iconfont icon-ziyuan','iconfont icon-peishi','iconfont icon-gehumeizhuang','iconfont icon-gehumeizhuang',
        'iconfont icon-jiajujiafang','iconfont icon-shenghuobaihuo','iconfont icon-muying','iconfont icon-shipin']
        this.list = res.data.category.list
        for(let i=0 ;i<this.list.length;i++){
          this.list[i].icons=icons[i]
        }
      })


    }
  }
</script>

<style scoped>
  .iconfont{
    font-size: 30px;
  }
  .title{
    padding-top: 10px;
    font-weight: bolder;
  }
</style>
