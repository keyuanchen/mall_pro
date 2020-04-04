<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" class="nav-bar-left" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="nav-bar-center">
        <div
          class="nav-bar-item"
          v-for="(item, index) in navList"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="tabClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "content/navbar/NavBar.vue"

export default {
  name: "",
  components: {
    NavBar
  },
  data() {
    return {
      navList: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    tabClick(index) {
      this.currentIndex = index
      // 向父组件传递index
      this.$emit("tabClick", index)
    },
    backHome() {
      this.$router.back()
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
.detail-nav {
  font-size: 16px;
  background-color: #fff;
  font-weight: 600;
  .nav-bar-left img {
    margin-top: 12px;
  }
  .nav-bar-center {
    display: flex;
    .nav-bar-item {
      flex: 1;
    }
  }
}
.active {
  color: red;
}
</style>
