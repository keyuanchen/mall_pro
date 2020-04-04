<template>
  <div class="toast" v-show="isShow">
    {{ info }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  data() {
    return {
      info: "",
      isShow: false
    }
  },
  // props: {
  //   info: {
  //     type: String,
  //     default: ""
  //   }
  // },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    show(info = "请选择商品", duration = 1000) {
      this.info = info
      this.isShow = true
      setTimeout(() => {
        this.info = ""
        this.isShow = false
      }, duration)
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
.toast {
  width: 180px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 8px;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
