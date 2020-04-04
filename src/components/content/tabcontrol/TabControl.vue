<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in title"
      :key="index"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    tabClick(index) {
      this.currentIndex = index
      // 向父组件传递index
      this.$emit("tabClick", index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  margin-bottom: 18px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>
