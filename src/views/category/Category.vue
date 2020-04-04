<template>
  <div class="category">
    <!-- 顶部导航栏 -->
    <category-nav-bar class="category-nav" />
    <div class="category-content">
      <tab-menu :categories="categories" @tabMenu="tabMenu" />
      <scroll class="content" :category-data="[categoryData]">
        <div class="tab-category-content">
          <tab-category
            class="subcategories"
            :subcategories="showSubcategory"
          ></tab-category>
          <tab-control :title="title" @tabClick="tabClick" />
          <goods-list :goods="showCategoryDetail" />
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import CategoryNavBar from "./childrenComps/CategoryNavBar"
import TabMenu from "./childrenComps/TabMenu"
import TabCategory from "./childrenComps/TabCategory"

import Scroll from "common/betterscroll/BetterScroll"
import TabControl from "content/tabcontrol/TabControl"
import GoodsList from "content/goods/GoodsList"

import {
  getCategory,
  getSubcategories,
  getCategoryDetail
} from "network/category"

export default {
  components: {
    CategoryNavBar,
    Scroll,
    TabMenu,
    TabCategory,
    TabControl,
    GoodsList
  },
  data() {
    return {
      // 保存分类页面左侧列表数据
      categories: [],
      // 分类对应的内容数据
      categoryData: {},
      currentIndex: -10,
      title: ["综合", "新品", "销量"],
      // 记录tabControl点击的index
      type: "pop"
    }
  },
  created() {
    this.getCategory()
  },
  mounted() {},
  watch: {},
  computed: {
    showSubcategory() {
      if (this.currentIndex === -10) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -10) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.type]
    }
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        // console.log(res.data.data)
        const data = res.data.data
        this.categories = data.category.list
        // 初始化子分类的数据 备后面使用
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          }
        }

        // 获取第一个分类对应的数据
        this.getSubcategories(0)
      })
    },
    getSubcategories(index) {
      this.currentIndex = index
      const maitKey = this.categories[this.currentIndex].maitKey
      getSubcategories(maitKey).then(res => {
        // console.log(res.data.data)
        const data = res.data.data
        this.categoryData[index].subcategories = data
        // 获取对应分类的商品列表数据
        this.getCategoryDetail("pop")
        this.getCategoryDetail("new")
        this.getCategoryDetail("sell")
      })
    },
    getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey
      getCategoryDetail(type, miniWallkey).then(res => {
        // console.log(res)
        this.categoryData[this.currentIndex].categoryDetail[type] = res.data
        // 对象解构
        this.categoryData = { ...this.categoryData }
      })
    },
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
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
    },
    tabMenu(index) {
      // console.log(index)
      this.getSubcategories(index)
    }
  }
}
</script>
<style lang="less" scoped>
.category {
  height: 100vh;
  position: relative;
  .category-nav {
    position: relative;
    z-index: 9;
  }
  .category-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
    .content {
      flex: 1;
      height: 100%;
      .tab-category-content {
        padding: 5px;
        .subcategories {
          margin: 15px 0;
        }
      }
    }
  }
}
</style>
