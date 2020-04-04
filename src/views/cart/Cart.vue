<template>
  <div class="cart">
    <!-- 导航条 -->
    <cart-nav-bar class="cart-nav-bar"></cart-nav-bar>
    <scroll ref="scroll" class="content" v-if="products.length !== 0">
      <!-- 商品列表 -->
      <cart-list></cart-list>
    </scroll>
    <!-- 底部工具栏 -->
    <!-- <cart-bottom-bar @toBill="toBill"></cart-bottom-bar> -->
    <cart-bottom-bar></cart-bottom-bar>
    <!-- 吐司 -->
    <!-- <toast v-show="isToastShow" :info="toastText"></toast> -->
  </div>
</template>

<script>
import CartNavBar from "./childrenComps/CartNavBar"
import CartList from "./childrenComps/CartList"
import CartBottomBar from "./childrenComps/CartBottomBar"

import Scroll from "@/components/common/betterscroll/BetterScroll"
// import Toast from "@/components/common/toast/Toast"

import { mapState } from "vuex"

export default {
  components: {
    CartNavBar,
    CartList,
    CartBottomBar,
    Scroll
    // Toast
  },
  data () {
    return {
      // toastText: "",
      // isToastShow: false
    }
  },
  created () { },
  mounted () { },
  watch: {},
  computed: {
    ...mapState(["products"])
  },
  activated () {
    this.$refs.scroll && this.$refs.scroll.refresh()
    // 该组件处于激活的状态下，获取本地的商品数据
    const localProducts =
      JSON.parse(window.localStorage.getItem("products")) || []
    // 保存数据到vuex中
    this.$store.dispatch("saveProducts", localProducts)
  },
  methods: {
    // toBill(info) {
    // console.log(info)
    // this.toastText = info
    // this.isToastShow = true
    // setTimeout(() => {
    //   this.isToastShow = false
    //   this.toastText = ""
    // }, 1500)
    // }
  }
}
</script>
<style scoped lang="less">
.cart {
  position: relative;
  height: 100vh;
  .cart-nav-bar {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100% - 44px - 40px - 49px);
  }
}
</style>
