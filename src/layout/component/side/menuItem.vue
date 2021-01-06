<template>
  <div>
    <div v-if="!hasChildren(item)">
      <router-link v-if="item.name" :to="{name: item.name}">
        <el-menu-item :index="item.name">
          <i :class="[item.meta.icon, 'side-icon']"></i>
          <span slot="title">{{item.meta.name}}</span>
        </el-menu-item>
      </router-link>
    </div>
    <el-submenu v-else :index="item.name">
      <template slot="title">
        <i :class="[item.meta.icon, 'side-icon']"></i>
        <span slot="title">{{item.meta.name}}</span>
      </template>
      <menu-item v-for="subItem in item.children" :key="subItem.name" :item="subItem" />
    </el-submenu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'menuItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters(['collapse'])
  },
  methods: {
    hasChildren (item) {
      return item.children && item.children.length
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.side-icon {
  margin-right: 30px !important;
}
</style>
