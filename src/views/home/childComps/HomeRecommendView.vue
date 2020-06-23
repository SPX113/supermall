<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="" >
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;

  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
  .recommendItem{
    flex:1;
    margin: 0 5px;
  }
  .recommendItem img{
    /*height: 70px;*/
    /*width: 70px;*/
    margin-bottom: 10px;
    max-width: 100%;
    height: auto;
  }

</style>