<template>
  <swiper v-if="banners.length !== 0">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper"

export default {
  name: "HomeSwiper",
  data() {
    return {
      // 记录轮播图是否有加载的状态
      isSwiperLoad: false
    }
  },
  props: {
    banners: {
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
  methods: {
    swiperImgLoad() {
      if (!this.isSwiperLoad) {
        this.$emit("swiperImgLoad")
        this.isSwiperLoad = true
      }
    }
  }
}
</script>

<style scoped></style>
