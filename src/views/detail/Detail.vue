<template>
  <div class="detail">
    <detail-nav-bar
      @tabClick="tabClick"
      class="detail-nav-bar"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <!-- 轮播图 -->
      <detail-swiper
        ref="swiper"
        class="detail-swiper"
        :swiper-info="swiperInfo"
        @swiperImgLoad="swiperImgLoad"
      ></detail-swiper>
      <!-- 商品基本信息 -->
      <detail-base-info :goods-base-info="goodsBaseInfo"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 商品信息数据展示 -->
      <detail-goods-info
        :detail-goods-info="detailGoodsInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <!-- 商品参数 -->
      <detail-params-info
        ref="params"
        :detail-params="detailParams"
      ></detail-params-info>
      <!-- 用户评论 -->
      <detail-comments-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comments-info>
      <!-- 推荐列表 -->
      <detail-goods-list
        ref="recommend"
        :goods="goodsRecommendInfo"
      ></detail-goods-list>
    </scroll>
    <back-to-top v-show="isBackTopShow" @click.native="backToTop"></back-to-top>
    <bottom-tool-bar @addToCart="addToCart"></bottom-tool-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childrenComps/DetailNavBar"
import DetailSwiper from "./childrenComps/DetailSwiper"
import DetailBaseInfo from "./childrenComps/DetailBaseInfo"
import DetailShopInfo from "./childrenComps/DetailShopInfo"
import DetailGoodsInfo from "./childrenComps/DetailGoodsInfo"
import DetailParamsInfo from "./childrenComps/DetailParamsInfo"
import DetailCommentsInfo from "./childrenComps/DetailCommentsInfo"
import DetailGoodsList from "./childrenComps/DetailGoodsList"
import BottomToolBar from "./childrenComps/BottomToolBar"

import Scroll from "common/betterscroll/BetterScroll.vue"

import { getDetailTotalInfo } from "network/detail"

import { GoodsBaseInfo, ShopInfo, DetailInfo } from "@/common/utils"
import { debounce } from "@/common/debounce"
import { BackToTopMixin } from "@/common/mixin"

import { mapState } from "vuex"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParamsInfo,
    DetailCommentsInfo,
    DetailGoodsList,
    BottomToolBar
  },
  mixins: [BackToTopMixin],
  data() {
    return {
      iid: this.$route.params.iid,
      swiperInfo: [],
      // 商品基本信息
      goodsBaseInfo: {},
      // 店铺数据
      shop: {},
      // 商品信息数据图片
      detailGoodsInfo: {},
      // 商品参数数据
      detailParams: {},
      // 用户评论信息
      commentInfo: {},
      // 推荐列表数据
      goodsRecommendInfo: [],

      detailPartPositionYS: [],
      // 记录商品信息展示图片加载的个数
      count: 0,
      // 记录当前滚动内容对应的title索引
      currentIndex: 0
    }
  },
  created() {
    getDetailTotalInfo(this.iid).then(res => {
      // console.log(res.data.result)
      const data = res.data.result
      // 1.获取轮播图数据
      this.swiperInfo = data.itemInfo.topImages
      // 获取商品基本信息数据
      this.goodsBaseInfo = new GoodsBaseInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )

      // 获取店铺信息
      this.shop = new ShopInfo(data.shopInfo)

      // 获取商品信息数据
      this.detailGoodsInfo = new DetailInfo(data.detailInfo)

      // 获取商品参数数据
      this.detailParams = data.itemParams

      // 获取用户评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
      // 获取初始化的详情页面参数，评论等到页面顶部的距离
      // 此处不能保证获取到最新的dom
      // this.detailPartPositionYS.push(0)
      // this.detailPartPositionYS.push(this.$refs.params.$el.offsetTop)
      // this.detailPartPositionYS.push(this.$refs.comment.$el.offsetTop)
      // this.detailPartPositionYS.push(this.$refs.recommend.$el.offsetTop)
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on("imgLoad", () => {
      refresh()
    })
    //  这里拿到的是最新的dom，但是图片等资源还没有拿到，因此获取到的offsetTop是不准确的,这里仍不行
    // this.$nextTick(() => {
    //   this.detailPartPositionYS.push(0)
    //   this.detailPartPositionYS.push(this.$refs.params.$el.offsetTop)
    //   this.detailPartPositionYS.push(this.$refs.comment.$el.offsetTop)
    //   this.detailPartPositionYS.push(this.$refs.recommend.$el.offsetTop)
    // })
  },
  updated() {
    // 这里也不能保证拿到最新的dom，更不能保证拿到准确的offsetTop
    // this.detailPartPositionYS.push(0)
    // this.detailPartPositionYS.push(this.$refs.params.$el.offsetTop)
    // this.detailPartPositionYS.push(this.$refs.comment.$el.offsetTop)
    // this.detailPartPositionYS.push(this.$refs.recommend.$el.offsetTop)
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    // 只要有一张轮播图加载完成，就重新刷新scroll
    swiperImgLoad() {
      this.$refs.scroll.refresh()
    },
    tabClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.detailPartPositionYS[index], 200)
    },

    imageLoad() {
      // 商品信息图片全部显示
      if (++this.count === this.detailGoodsInfo.list.length) {
        // 获取到页面顶部的距离
        this.detailPartPositionYS.push(0)
        this.detailPartPositionYS.push(this.$refs.params.$el.offsetTop)
        this.detailPartPositionYS.push(this.$refs.comment.$el.offsetTop)
        this.detailPartPositionYS.push(this.$refs.recommend.$el.offsetTop)
        // console.log(Number.MAX_VALUE)
        this.detailPartPositionYS.push(Number.MAX_VALUE)
        this.$refs.scroll.refresh()
        // console.log(this.count)
        this.count = 0
      }
    },
    contentScroll(position) {
      // console.log(position)
      this.isBackTopShow = -position.y > 1200
      // 当detailPartPositionYS[0]-detailPartPositionYS[1], title商品激活显示
      // 当detailPartPositionYS[1]-detailPartPositionYS[2], title参数激活显示
      // 当detailPartPositionYS[2]-detailPartPositionYS[3], title评论激活显示
      // 当滚动距离大于detailPartPositionYS[3], title推荐激活显示
      // hack写法
      // 新增加一个无穷大的数,添加到detailPartPositionYS中
      for (let i = 0; i < this.detailPartPositionYS.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          -position.y < this.detailPartPositionYS[i + 1] &&
          -position.y > this.detailPartPositionYS[i]
        ) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
          // console.log(this.currentIndex)
        }
      }
    },
    addToCart() {
      // console.log("hhh")
      // 1.准备一个该商品详情信息
      const product = {}
      product.iid = this.iid
      product.title = this.goodsBaseInfo.title
      product.price = this.goodsBaseInfo.price
      product.desc = this.detailGoodsInfo.desc
      product.image = this.detailGoodsInfo.list[0]
      // 添加到vuex中保存product状态
      this.$store.dispatch("addToCart", product).then(res => {
        // 这里表示添加商品成功而做的回调
        this.$toast.show(res)
        // 保存商品数据到本地
        window.localStorage.setItem("products", JSON.stringify(this.products))
      })
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
.detail {
  height: 100vh;
  .detail-nav-bar {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100% - 44px - 58px);
  }
}
</style>
