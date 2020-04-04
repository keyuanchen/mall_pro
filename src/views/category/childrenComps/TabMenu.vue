<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div
        class="menu-list-item"
        v-for="(item, index) in categories"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="tabMenu(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "common/betterscroll/BetterScroll"

export default {
  name: "",
  components: {
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    tabMenu(index) {
      this.currentIndex = index
      this.$emit("tabMenu", index)
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
#tab-menu {
  height: 100%;
  width: 100px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  .menu-list {
    padding: 6px 0;
    .menu-list-item {
      font-size: 16px;
      text-align: center;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
    .active {
      font-weight: 700;
      color: red;
      background-color: #fff;
      border-left: 2px solid #ff5777;
    }
  }
}
</style>
