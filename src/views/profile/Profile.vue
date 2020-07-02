<template>
  <div class="profile">
    <nav-bar>
      <div slot="center">个人用户</div>
    </nav-bar>
    <info/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Info from "./childComps/Info";
  export default {
    name: "Profile",
      components:{
        NavBar,Info
      }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }

</style>
