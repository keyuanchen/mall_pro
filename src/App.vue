<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
    <loading v-if="isLoadingShow"></loading>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/MainTabBar.vue"
import Icon from "content/icon/Icon"
import SvgIcon from "content/icon/Svg"
// 导入发送请求的loading组件
import Loading from "common/loading/Loading"

import { mapState } from "vuex"

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    MainTabBar,
    Icon,
    SvgIcon,
    Loading
  },
  computed: {
    ...mapState(["isLoadingShow"])
  }
}
</script>

<style lang="less">
@import "~@/assets/css/base.css";
#app {
  height: 100vh;
  width: 100vw;
}
</style>
