<template>
  <div class="detail-param">
    <div class="size">
      <table>
        <tr v-for="item in goodsParam.size">
          <td v-for="ii in item">{{ii}}</td>
        </tr>
      </table>
    </div>
    <div class="info">
      <table>
        <tr v-for="item in goodsParam.info">
          <td v-for="ii in item">{{ii}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParam",
    props:{
      goodsParam:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .size{
    text-align: center;
    padding: 0.7rem;
    font-size: 0.7rem;
    width: 100%;
    border-bottom: #f2f5f8 solid 5px;
  }
  .size table{
    margin: auto 0;
    width: 100%;
    padding: 5px 10px;
    font-family: Verdana;
    color: black;
    border-collapse:collapse;
  }
  .size table td{
    border: gainsboro 1px solid;
    padding: 0.5rem 0 0.5rem;
  }
  .info{
    text-align: center;
    padding: 0.7rem;
    font-size: 0.7rem;
    width: 100%;
    border-bottom: #f2f5f8 solid 5px;
  }
  .info table{
    margin: auto 0;
    width: 100%;
    padding: 5px 10px;
    font-family: Verdana;
    color: black;
    border-collapse:collapse;
  }
  .info table td{
    border: gainsboro 1px solid;
    padding: 0.5rem 0 0.5rem;
    min-width: 3rem;
  }

</style>