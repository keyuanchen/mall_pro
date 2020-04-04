<template>
  <div class="cart-bottom-bar">
    <div class="bar-item-left">
      <div class="item-select-all" @click="tabCheckAll">
        <check-button class="check-button" :is-selected="isCheckAll"></check-button>全选
      </div>
      <div class="item-total-price">
        合计:
        <span>{{ totalPrice }}</span>
      </div>
    </div>
    <div class="bar-item-right" @click="goToBill" :class="{ nobuy: checkedCount === 0 }">提交商品</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton"

import { mapGetters, mapState } from "vuex"

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  data () {
    return {}
  },
  created () { },
  mounted () { },
  computed: {
    ...mapGetters(["totalPrice", "checkedCount", "product"]),
    ...mapState(["products"]),
    isCheckAll () {
      if (this.$store.state.products.length === 0) return false
      return this.$store.state.products.find(product => !product.check)
        ? false
        : true
    }
  },
  methods: {
    tabCheckAll () {
      // 如果全选，那么就全不选
      if (this.isCheckAll) {
        this.products.forEach(item => {
          item.check = false
        })
      } else {
        // 否则，就全选
        this.products.forEach(item => {
          item.check = true
        })
      }
      window.localStorage.setItem("products", JSON.stringify(this.products))
    },
    // 提交
    goToBill () {
      if (this.checkedCount === 0) {
        // this.$emit("toBill", "请选择需要结算的商品")
        this.$toast.show("请选项结算的商品")
      }
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
.cart-bottom-bar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  font-size: 14px;
  background-color: #eee;
  height: 40px;
  line-height: 40px;
  .bar-item-left {
    flex: 1;
    display: flex;
    .item-select-all {
      display: flex;
      height: 20px;
      line-height: 20px;
      margin: 10px 30px 0 15px;
      .check-button {
        margin-right: 10px;
      }
    }
    .item-total-price {
      span {
        color: red;
        font-weight: 800;
        font-size: 16px;
      }
    }
  }
  .bar-item-right {
    width: 120px;
    background: -webkit-linear-gradient(to right, red, blue);
    background: linear-gradient(to right, #fe5c33, #ee0d24);
    border-radius: 15px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    &.nobuy {
      background: #ccc;
      color: #666;
    }
  }
}
</style>
