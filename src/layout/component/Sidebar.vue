<template>
  <div :class="['side-bar-in', !collapse ? 'min-width' : 'max-width']">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="$route.name"
        class="el-menu-vertical-demo"
        background-color="#f3cfff"
        text-color="#c333ce"
        :collapse="!collapse"
        :collapse-transition="false"
        mode="vertical"
      >
        <menu-item v-for="menu in routes" :key="menu.name" :item="menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { asyncRoutes } from '@/router/routes';
import menuItem from '@/layout/component/side/menuItem';
export default {
  name: 'Sidebar',
  components: {
    menuItem
  },
  computed: {
    ...mapGetters(['collapse']),
    routes() {
      return asyncRoutes;
    }
  }
};
</script>

<style scoped>
.side-bar-in {
  height: 100%;
  background-color: #f3cfff;
}
.min-width {
  width: 64px;
}
.max-width {
  width: 250px;
}
.el-scrollbar__thumb {
  display: none;
}
.min-width >>> .el-submenu__icon-arrow {
  display: none;
}
</style>
