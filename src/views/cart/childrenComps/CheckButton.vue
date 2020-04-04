<template>
  <div class="checked-btn" :class="{ selected: isSelected }">
    <img src="~@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  props: {
    isSelected: {
      type: Boolean,
      default: false
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
.checked-btn {
  border-radius: 50%;
  border: 1px solid #bbb;
}
.selected {
  background-color: red;
  border-color: red;
}
</style>
