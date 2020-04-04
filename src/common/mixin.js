import BackToTop from "@/components/common/backtop/BackToTop.vue"

export const BackToTopMixin = {
  data() {
    return {
      isBackTopShow: false
    }
  },
  components: {
    BackToTop
  },
  methods: {
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 200)
    }
  }
}