<template>
  <div class="tips-container">
    <span class="icon-container">
      <i class="iconfont icon-iconfontgantanhao3"></i>
    </span>
    <p>{{tipsText}}</p>
    <button @click="toContirm">确认</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  props: {
    tipsText: {
      type: String,
      default: ''
    }
  },
  created () { },
  mounted () { },
  computed: {},
  methods: {
    toContirm () {
      // 分发自定义事件给父组件
      // console.log(e)
      this.$emit('buttonClick')
    }
  },
  watch: {}
}
</script>
<style scoped lang='less'>
.tips-container {
  width: 70%;
  height: 300px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  .icon-container {
    width: 80px;
    height: 80px;
    line-height: 50px;
    text-align: center;
    i {
      font-size: 80px;
    }
  }
  p {
    margin: 20px 0;
  }
  button {
    width: 80%;
    padding: 10px 0;
    background-color: #41c66c;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 700;
    border-radius: 10px;
    font-size: 20px;
    outline: 0;
  }
}
</style>