<template>
  <tab-bar v-show="$route.meta.showTabBar">
    <tab-bar-item path="/home">
      <img src="~@/assets/img/tabbar/home.svg" slot="item-icon" />>
      <img src="~@/assets/img/tabbar/home_active.svg" slot="item-icon-active" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~@/assets/img/tabbar/category.svg" slot="item-icon" />
      <img src="~@/assets/img/tabbar/category_active.svg" slot="item-icon-active" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" class="tab-bar-item-cart">
      <img src="~@/assets/img/tabbar/shopcart.svg" slot="item-icon" />
      <img src="~@/assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" />
      <div slot="item-text">购物车</div>
      <!-- 购物车小球 -->
      <span>{{checkedCount}}</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~@/assets/img/tabbar/profile.svg" slot="item-icon" />
      <img src="~@/assets/img/tabbar/profile_active.svg" slot="item-icon-active" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

import { mapGetters } from 'vuex'

export default {
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  watch: {},
  computed: {
    ...mapGetters(['checkedCount'])
  },
  methods: {},
}
</script>
<style scoped lang='less'>
.tab-bar-item-cart {
  position: relative;
  span {
    height: 20px;
    width: 20px;
    font-size: 14px;
    line-height: 20px;
    background-color: #ef1025;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    right: 20px;
    top: 2px;
  }
}
</style>