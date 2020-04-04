<template>
  <goods-list :goods="recommend"></goods-list>
</template>

<script>
import { getRecommendInfo } from "network/detail"

import GoodsList from "content/goods/GoodsList.vue"

export default {
  name: "",
  components: {
    GoodsList
  },
  data() {
    return {
      recommend: []
    }
  },
  created() {
    this.getRecommend()
  },
  mounted() {},
  computed: {},
  methods: {
    getRecommend() {
      getRecommendInfo().then(res => {
        // console.log(res.data.data.list)
        const data = res.data.data.list
        this.recommend = data
      })
    }
  },
  watch: {}
}
</script>
<style scoped lang="less"></style>
