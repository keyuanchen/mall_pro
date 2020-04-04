<template>
  <div class="home-nav-bar">
    <nav-bar>
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "content/navbar/NavBar.vue"

export default {
  components: {
    NavBar
  },
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
.home-nav-bar {
  background-color: #ff8198;
  color: #fff;
}
</style>
