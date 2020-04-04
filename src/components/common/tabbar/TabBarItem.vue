<template>
  <div class="tab-bar-item" @click="tabClick">
    <div class="item-icon" v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon-active" v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  components: {},
  created () { },
  mounted () { },
  watch: {},
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) != -1 ? true : false
    }
  },
  methods: {
    tabClick () {
      // console.log("---")
      this.$router.replace(this.path)
    }
  }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
}
.item-icon img,
.item-icon-active img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 5px;
}
.item-text {
  margin-top: 5px;
  font-size: 16px;
  color: #333;
}
</style>
