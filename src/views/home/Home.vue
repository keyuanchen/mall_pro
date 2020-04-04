<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 拷贝的tabControl -->
    <tab-control
      class="tabControl1"
      ref="tabControl1"
      @tabClick="tabClick"
      v-show="isTabShow"
    ></tab-control>
    <scroll
      :probe-type="3"
      @scroll="pageScroll"
      class="content"
      ref="scroll"
      :is-pull-up-load="true"
      @pullUpLoad="pullUpLoad"
    >
      <!-- 轮播图 -->
      <home-swiper @swiperImgLoad="swiperImgLoad" :banners="banners" />
      <!-- 推荐区域 -->
      <recommend-list :recommend-list="recommendList"></recommend-list>
      <!-- 特色精品 -->
      <feature-view></feature-view>
      <tab-control
        class="tabControl2"
        ref="tabControl2"
        :title="title"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="goodsList[this.type].list"></goods-list>
    </scroll>
    <!-- 回到顶部按钮 -->
    <back-to-top v-show="isBackTopShow" @click.native="backToTop"></back-to-top>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComps/HomeSwiper"
import RecommendList from "./childrenComps/RecommendView"
import FeatureView from "./childrenComps/FeatureView"

import NavBar from "content/navbar/NavBar"
import TabControl from "content/tabcontrol/TabControl"
import GoodsList from "content/goods/GoodsList.vue"
import Scroll from "common/betterscroll/BetterScroll.vue"

import { getHomeMultiData, getHomeGoods } from "network/home"

import { debounce } from "@/common/debounce.js"
import { BackToTopMixin } from "@/common/mixin"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendList,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommendList: [],
      title: ["流行", "新品", "精选"],
      // 商品列表数据
      goodsList: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      // 记录当前哪一个type
      type: "pop",
      // 记录tabControl距离页面顶部的距离
      tabControlToTop: 0,
      isTabShow: false,
      // 记录离开该页面时保存的滚动y
      savePositionY: 0
    }
  },
  mixins: [BackToTopMixin],
  computed: {},
  created() {
    this.getHomeMultiData()

    // 获取 流行， 新品， 精选 的首页商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on("imgLoad", () => {
      refresh()
    })
  },
  // destroyed() {
  //   console.log("销毁")
  // },
  activated() {
    // console.log("激活")
    // 滚动到上次离开时候的y位置
    this.$refs.scroll.scrollTo(0, this.savePositionY, 0)
    // 防止在该页面出现卡屏无法滑动问题
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // console.log("未激活")'
    // 记录滚动的y
    this.savePositionY = this.$refs.scroll.getScrollPositionY()
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // 防抖函数控制图片加载过多的回调
    // 已经进行了模块封装
    debounce(func, delay = 100) {
      let timer = null
      return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    tabClick(index) {
      // console.log(typeof index)
      switch (index) {
        case 0:
          this.type = "pop"
          break
        case 1:
          this.type = "new"
          break
        case 2:
          this.type = "sell"
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    pageScroll(position) {
      // console.log(position)
      // 判断是否大于指定高度，来决定backToTop的显示与隐藏
      this.isBackTopShow = -position.y > 1500 ? true : false
      // 拷贝的tabControl是否显示
      this.isTabShow = -position.y > this.tabControlToTop
    },
    pullUpLoad() {
      // console.log("上拉加载更多")
      this.getHomeGoods(this.type)
    },
    swiperImgLoad() {
      // console.log("轮播图加载完成")
      // 获取tabControl到页面顶部的距离(获取组件根元素的时候，后面添加$el)
      // console.log(this.$refs.tabControl2.$el.offsetTop)
      this.tabControlToTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关的方法
     */
    // 获取轮播图和推荐区域的信息
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        // this.result = res;
        const data = res.data.data
        this.banners = data.banner.list
        this.recommendList = data.recommend.list
      })
    },
    // 获取商品列表数据
    getHomeGoods(type) {
      const page = this.goodsList[type].page + 1

      getHomeGoods(type, page).then(res => {
        // console.log(res.data.data)
        const list = res.data.data.list
        this.goodsList[type].list.push(...list)
        this.goodsList[type].page++

        // 获取商品数据后，终止该次的上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  /* position: relative; */
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

.tabControl1 {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #fff;
}
</style>
