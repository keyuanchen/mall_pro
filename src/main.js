import Vue from "vue"
import App from "./App.vue"

import router from "./router"
import store from "./store"

import Toast from "@/components/common/toast/toast.js"

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.use(VueLazyLoad, {
  loading: require("@/assets/img/common/loading.gif")
})

// 获取本地存储中的数据,并保存到vuex中
store.state.products = JSON.parse(window.localStorage.getItem('products')) || []
store.state.userinfo = JSON.parse(window.localStorage.getItem('userinfo')) || {}

// FastClick.attach(document.body)

Vue.use(Toast)

// 中央事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")