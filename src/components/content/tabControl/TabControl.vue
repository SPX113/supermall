<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item" :class="{active:index === currentindex}" @click="currentindex = index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentindex:0
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
}
  .tab-control-item{
    flex:1
  }
.active{
  color: var(--color-high-text);
}
  .active span{
    border-bottom: var(--color-tint) solid 2px;
    padding:3px 15px;
  }

</style>