<template>
  <div class="content">
    <div class="side-bar-out">
      <side-bar />
    </div>
    <div class="nav-bar-out">
      <nav-bar />
    </div>
  </div>
</template>

<script>
import NavBar from '@/layout/component/Navbar'
import SideBar from '@/layout/component/Sidebar'
export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  height: 100%;
}
/*.side-bar-out {*/
/*  min-width: 45px;*/
/*  height: 100%;*/
/*  background-color: #f3cfff;*/
/*}*/
.nav-bar-out {
  background-color: #e6e6e6;
  padding: 10px 0 0 20px;
  width: 100%;
  height: 50px;
}
</style>
