<template>
  <div class="content">
    <div class="side-bar-out content-left">
      <side-bar />
    </div>
    <div :class="{hasTagsView: needTagsView}" class="content-right">
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
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar
  },
  computed: {
    ...mapState({
      needTagsView: state => state.collapse
    })
  }
}
</script>

<style scoped>
.content {
  position: relative;
  height: 100%;
  width: 100%;
}
.content-right {
  height: 100%;
  margin-left: 64px;
}
.content-left {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
}
.nav-bar-out {
  padding: 10px 0 0 20px;
  height: 50px;
}
.nav-menu {
  height: 50px;
  background-color: #ffffff;
}
.hasTagsView {
  margin-left: 250px;
  width: calc(100% - 250px);
}
</style>
