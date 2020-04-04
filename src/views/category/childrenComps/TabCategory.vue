<template>
  <div class="tab-category">
    <div
      class="tab-category-item"
      v-for="(item, index) in subcategories.list"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabCategory",
  components: {},
  data() {
    return {}
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style scoped lang="less">
.tab-category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
  .tab-category-item {
    width: 30%;
    text-align: center;
    margin-bottom: 5px;
    img {
      width: 60px;
    }
  }
}
</style>
