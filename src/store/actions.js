import {
  ADD_TO_CART,
  ADD_COUNT,
  SAVE_PRODUCTS,
  REMOVE_PRODUCT,
  SAVE_USER_INFO
} from './mutation-types'

export default {
  addToCart({
    state,
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      const oProduct = state.products.find(item => item.iid === payload.iid)

      if (oProduct) {
        commit(ADD_COUNT, oProduct)
        resolve('该商品数量 + 1')
      } else {
        payload.count = 1
        commit(ADD_TO_CART, payload)
        resolve('添加商品成功')
      }
    })
  },
  saveProducts({
    state,
    commit
  }, payload) {
    // 触发mutations中的方法，保存products
    commit(SAVE_PRODUCTS, payload)
  },
  removeProduct({
    state,
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      commit(REMOVE_PRODUCT, payload)
      // 存储到本地
      window.localStorage.setItem('products', JSON.stringify(state.products))
      resolve('删除商品成功')
    })
  },
  // 保存登录的用户信息
  saveUserInfo({
    commit
  }, payload) {
    commit(SAVE_USER_INFO, payload)
  }
}