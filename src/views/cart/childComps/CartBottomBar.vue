<template>
  <div class="bottom-bar">
    <div class="checkAll">
      <check-button @click.native="allBuy" :ischecked="isSelectAll" />
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="goBuy">
      去购买:{{checkLength}}
    </div>
  </div>
</template>

<script>
  import checkButton from 'components/content/checkButton/CheckButton'
  export default {
    name: "CartBottomBar",
    components:{
      checkButton
    },
    computed:{
      totalPrice(){
        return this.$store.getters.cartList.filter(item => {
          return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0).toFixed(2) + '元'
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        // return this.$store.state.cartList.length !== 0 && !this.$store.state.cartList.find(item => !item.checked)
        return this.$store.state.cartList.length !== 0 && this.$store.state.cartList.every(item => item.checked)
      }
    },
    methods:{
      allBuy(){
        if(this.isSelectAll){
          this.$store.commit('allBuy')
        }else{
          this.$store.commit('allBuy2')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    line-height: 40px;
    background-color: #eeeeee;
    font-size: 0.8rem;
    display: flex;
  }
  .checkAll{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 80px;
  }
  .check-button{
    width: 22px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
  }
  .price{
    margin-left: 20px;
    flex: 1;
  }
  .goBuy{
    width: 100px;
    text-align: center;
    background-color:var(--color-high-text);
    color: #eeeeee;
  }
</style>