<template>
  <div class="recommend">
    <a class="recommend-item" href="" v-for="item in recommendList">
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
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
.recommend {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 5px solid #eee;
  font-size: 14px;
}
.recommend-item {
  flex: 1;
  width: 70px;
}
.recommend-item img {
  width: 90%;
}
.recommend-item div {
  margin-top: 10px;
  text-align: center;
}
</style>
