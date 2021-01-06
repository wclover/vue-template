<template>
  <div class="content">
    <div class="side-bar-out content-left">
      <side-bar />
    </div>
    <div class="content-right">
      <div class="nav-bar-out">
        <nav-bar />
      </div>
      <div class="nav-menu"></div>
      <div class="content-main">
        <router-view />
      </div>
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
.content-right {
  width: 100%;
}
.nav-bar-out {
  padding: 10px 0 0 20px;
  height: 50px;
}
.nav-menu {
  height: 50px;
  background-color: #ffffff;
}
.content-main {
  margin-top: 20px;
  height: calc(100% - 130px)
}
</style>
