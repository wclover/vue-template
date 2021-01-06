<template>
  <div class="nav-bar-in">
    <div class="collapse-icon" @click="switchCollapse">
      <i :class="collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item v-for="menu in menus" :key="menu.name">{{menu.metaName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <el-input placeholder="搜索" class="search-input">
        <i slot="prefix" class="el-icon-search search-incon"></i>
      </el-input>
    </div>
    <div>
      <el-popover
        placement="bottom"
        width="200"
        trigger="click">
        <div class="sign-out">退出</div>
        <div slot="reference" class="user">
          <i class="el-icon-user user-icon"></i>
          <span class="user-name">{{name}}</span>
        </div>
      </el-popover>
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
.nav-bar-in {
  position: relative;
}
.collapse-icon {
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
  position: absolute;
  top: 0;
  left: 50px;
  line-height: 30px;
}
.search {
  position: absolute;
  right: 300px;
  top: 0;
}
>>>.el-input__inner {
  border-radius: 20px;
  width: 200px;
}
.search-incon {
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.user {
  position: absolute;
  top: 5px;
  right: 150px;
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
.sign-out {
  font-size: 16px;
  text-align: center;
}
</style>
