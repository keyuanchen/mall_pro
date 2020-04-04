<template>
  <div class="tab-bar">
    <slot></slot>
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
.tab-bar {
  display: flex;
  text-align: center;

  /* 定位到页面底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  height: 49px;
  background-color: #eee;
  /* 上边框阴影 */
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
}
</style>
