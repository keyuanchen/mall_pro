<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-selected="isCheck" @click.native="checkTab"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">商品描述: {{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ product.price }}</div>
        <div class="item-count right">X{{ product.count }}</div>
      </div>
    </div>
    <!-- 删除按钮 -->
    <delete-btn
      class="deleteButton"
      :is-btn-show="isBtnShow"
      @click.native="removeItem(product.iid)"
    />>
  </div>
</template>

<script>
import CheckButton from "./CheckButton"
import DeleteBtn from './DeleteBtn'

import { mapState } from "vuex"

export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number,
      default: undefined
    }
  },
  components: {
    CheckButton,
    DeleteBtn
  },
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  computed: {
    ...mapState(["products"]),
    isCheck () {
      return this.product.check
    },
    isBtnShow () {
      return this.product.check ? true : false
    }
  },
  methods: {
    checkTab () {
      // console.log("---")
      this.product.check = !this.product.check

      window.localStorage.setItem("products", JSON.stringify(this.products))
    },
    removeItem (iid) {
      // console.log(iid)
      // 分发事件给 actions
      this.$store.dispatch('removeProduct', iid)
        .then(res => {
          console.log(res)
        })
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;

  position: relative;
  .deleteButton {
    position: absolute;
    right: 0;
    top: 5px;
  }
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 90px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>
