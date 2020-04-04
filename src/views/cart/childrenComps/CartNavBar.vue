<template>
  <div class="cart-nav">
    <nav-bar>
      <div slot="center">购物车({{ $store.state.products.length }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "content/navbar/NavBar"

export default {
  name: "CartNavBar",
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
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
