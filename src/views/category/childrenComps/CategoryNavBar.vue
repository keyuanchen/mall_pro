<template>
  <div class="category-nav-bar">
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar"

export default {
  name: "",
  components: {
    NavBar
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
.category-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
