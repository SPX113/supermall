<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'



export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
  @import "assets/css/base.css";
  @media only screen and (min-width: 320px){
    body {
      font-size: 62.5% !important;
    }
  }
  @media only screen and (min-width: 640px){
    body {
      font-size: 125% !important;
    }
  }
  @media only screen and (min-width: 750px){
    body {
      font-size: 150% !important;
    }
  }
  @media only screen and (min-width: 1242px){
    body {
      font-size: 187.5% !important;
    }
  }
</style>
