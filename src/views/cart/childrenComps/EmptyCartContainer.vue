<template>
  <div class="cart0">
    <div class="tubiao">
      <i class="iconfont icon-gouwuche-"></i>
    </div>
    <p>购物车竟然是空的</p>
    <span class="tips">即使再忙，也要备点东西犒劳一下自己呀！</span>
    <div class="searchSomething">
      <button @click="toBuy">去逛逛</button>
    </div>
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
  created () { },
  mounted () { },
  computed: {},
  methods: {
    toBuy () {
      this.$router.replace('/category')
    }
  },
  watch: {}
}
</script>
<style scoped lang='less'>
.cart0 {
  width: 80vw;
  height: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0;
  .tubiao {
    i {
      font-size: 60px;
      color: #ffbd27;
    }
  }
  p {
    color: #8a8a8a;
    margin-top: 40px;
    font-size: 20px;
  }
  span {
    margin-top: 20px;
    color: #c7c7c7;
    font-size: 14px;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    outline: 0;
    border: 0;
    background-color: #f1f1f1;
    color: #898e94;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    border: 1px solid #c7c7c7;
  }
}
</style>