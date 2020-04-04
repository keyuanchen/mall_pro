<template>
  <div class="deleteBtn" v-show="isBtnShow">X</div>
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
    isBtnShow: {
      type: Boolean,
      default: false
    }
  },
  created () { },
  mounted () { },
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style scoped lang='less'>
.deleteBtn {
  height: 24px;
  width: 24px;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  line-height: 24px;
  text-align: center;
  background-color: #ff0000;
  border-radius: 50%;
}
</style>