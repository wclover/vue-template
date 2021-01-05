<template>
  <div class="nav-bar-in">
    <div class="collapse-icon" @click="switchCollapse">
      <i :class="collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item v-for="menu in menus" :key="menu.name">{{menu.metaName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user">
      <i class="el-icon-user user-icon"></i>
      <span class="user-name">{{name}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {
      name: 'xxx'
    }
  },
  computed: {
    ...mapGetters(['collapse']),
    menus () {
      const RouteName = this.$route.matched.map(item => {
        return {
          name: item.name,
          metaName: item.meta.name
        }
      })
      return RouteName
    }
  },
  methods: {
    switchCollapse () {
      this.$store.dispatch('switchCollapse')
    }
  }
}
</script>

<style scoped>
.collapse-icon {
  float: left;
  background-color: cornflowerblue;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
}
.breadcrumb {
  float: left;
  line-height: 30px;
}
.user {
  float: right;
  margin-right: 100px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.user-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-name {
  line-height: 30px;
  margin-left: 10px;
}
</style>
