<template>
  <div class="goods-list-item" @click="goToDetail">
    <img v-lazy="showListImage" @load="imgLoad" alt="" />
    <div class="goods-info">
      <p class="title">
        {{ goodsItem.title }}
      </p>
      <div class="price-collect">
        <span class="price">{{ goodsItem.price }}</span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "goods-item": {
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
  watch: {},
  computed: {
    showListImage() {
      if (this.goodsItem.show) {
        return this.goodsItem.show.img
      } else if (this.goodsItem.image) {
        return this.goodsItem.image
      } else {
        return this.goodsItem.img
      }
    }
  },
  methods: {
    imgLoad() {
      // 使用中央事件总线传递自定义事件
      this.$bus.$emit("imgLoad")
    },
    goToDetail() {
      this.$router.push("/detail/" + this.goodsItem.iid)
    }
  }
}
</script>
<style scoped>
.goods-list-item {
  width: 46%;
  text-align: center;
  position: relative;
  padding-bottom: 50px;
}
.goods-list-item img {
  width: 100%;
}
.goods-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
}
.goods-info .title {
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 2px;
}
.goods-info .price-collect {
  margin-bottom: 5px;
  font-size: 13px;
}
.goods-info .price-collect span {
  margin-right: 30px;
}
.goods-info .price-collect .price {
  color: val(--color-tint);
}
.goods-info .price-collect .collect {
  position: relative;
}
.goods-info .price-collect .collect::before {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  position: absolute;
  left: -16px;
  bottom: 1px;
}
</style>
