<template>
  <div class="profile-nav">
    <nav-bar>
      <div slot="center">个人中心</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "content/navbar/NavBar.vue"

export default {
  name: "",
  components: {
    NavBar
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style scoped lang="less">
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
