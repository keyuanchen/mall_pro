<template>
  <div v-if="Object.keys(detailGoodsInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailGoodsInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailGoodsInfo.key }}</div>
    <div class="info-list" v-for="(item, i) in detailGoodsInfo.list" :key="i">
      <img :src="item" @load="goodsImageLoad" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailGoodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    // 商品图片加载
    goodsImageLoad() {
      this.$emit("imageLoad")
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
