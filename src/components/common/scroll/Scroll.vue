<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    methods:{
      refresh(){
        this.scroll && this.scroll.refresh();
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        mouseWheel: true
      })
      //2.监听滚动位置
      if (this.probeType === 2 || this.probeType ===3){
        this.scroll.on('scroll', possition =>{
          this.$emit('scroll',possition)
        })
      }
      //3.监听上拉事件
      if (this.pullUpLoad)
      {
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
        })
      }

    }
  }
</script>

<style scoped>

</style>