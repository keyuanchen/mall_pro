<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in showProduct" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem"

export default {
  name: "",
  components: {
    CartListItem
  },
  data () {
    return {}
  },
  created () { },
  mounted () { },
  computed: {
    showProduct () {
      return this.$store.state.products
    }
  },
  methods: {},
  watch: {}
}
</script>
<style scoped lang="less">
.cart-list {
  padding: 0 10px;
}
</style>
