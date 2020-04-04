<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in data" :key="index">
      <span class="icon">
        <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>
      </span>
      <div class="info">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  components: {},
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style scoped lang="less">
.list {
  background-color: #fff;
  padding: 0 10px;
  margin-top: 20px;
  .list-item {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #fbfbfb;
    padding: 10px 5px;
    .icon svg {
      width: 18px;
      height: 18px;
    }
    .info {
      margin-left: 10px;
    }
  }
}
</style>
