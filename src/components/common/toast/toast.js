import Toast from './Toast.vue'

const object = {}

object.install = function (Vue) {
  // console.log('install')
  // 1.创建组件构造器函数
  const constructor = Vue.extend(Toast)
  // 2.通过构造器，创建一个组件对象
  const toast = new constructor()
  // 3.将这个组件对象挂载到一个div元素之上
  toast.$mount(document.createElement('div'))
  // 4.将这个组件对象挂载的dom元素追加到页面中 toast.$el就是上一步骤中新创建的div这个DOM元素
  document.body.appendChild(toast.$el)
  // 5.将这个组件对象添加到Vue的原型对象上，供所有的组件调用该组件对象中的方法
  Vue.prototype.$toast = toast
}

export default object