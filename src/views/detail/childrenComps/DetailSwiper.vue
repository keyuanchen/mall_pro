<template>
  <swiper class="detail-swiper-wrapper">
    <swiper-item class="swiper-item" v-for="item in swiperInfo" :key="item">
      <img :src="item" @load="swiperLoad" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper"

export default {
  name: "",
  props: {
    swiperInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isSwiperLoad: false
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    swiperLoad() {
      if (!this.isSwiperLoad) {
        this.$emit("swiperImgLoad")
        this.isSwiperLoad = true
      }
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
.detail-swiper-wrapper {
  height: 300px;
}
.swiper-item {
  height: 300px;
}
</style>
