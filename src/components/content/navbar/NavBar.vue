<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
}
.left {
  flex: 1;
}
.center {
  flex: 3;
}
.right {
  flex: 1;
}
</style>
