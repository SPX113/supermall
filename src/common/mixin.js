import BackTop from "components/common/backTop/BackTop";
export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop : false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,1000)
    },
    listenShow(possition){
      this.isShowBackTop = possition.y < -1200
    }
  }
}