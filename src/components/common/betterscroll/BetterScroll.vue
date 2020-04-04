<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  components: {},
  data() {
    return {
      scroll: null
    }
  },
  props: {
    "probe-type": {
      type: Number,
      default: 0
    },
    "is-pull-up-load": {
      type: Boolean,
      default: false
    },
    categoryData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.isPullUpLoad
    })

    this.scroll.on("scroll", position => {
      this.$emit("scroll", position)
    })

    this.scroll.on("pullingUp", () => {
      this.$emit("pullUpLoad")
    })
  },
  watch: {
    categoryData() {
      setTimeout(() => {
        this.refresh()
      }, 50)
    }
  },
  computed: {},
  methods: {
    scrollTo(x, y, time = 100) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // 刷新重新获取新的scrollerHeight
      // console.log("refresh---")
      this.scroll.refresh()
    },
    getScrollPositionY() {
      if (!this.scroll) return 0
      return this.scroll.y
    }
  }
}
</script>
<style scoped></style>
