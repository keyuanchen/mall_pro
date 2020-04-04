import {
  ADD_TO_CART,
  ADD_COUNT,
  SAVE_PRODUCTS,
  REMOVE_PRODUCT,
  SAVE_USER_INFO
} from './mutation-types'

export default {
  [ADD_COUNT](state, oProduct) {
    oProduct.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.check = false
    state.products.push(payload)
  },
  // 修改isLoadingShow的状态
  mutateLoadingState(state, payload) {
    state.isLoadingShow = payload
  },
  // 保存本地获取到的products
  [SAVE_PRODUCTS](state, payload) {
    state.products = payload
  },
  // 删除store中的对应iid的商品
  [REMOVE_PRODUCT](state, payload) {
    const index = state.products.findIndex(p => p.iid === payload)
    state.products.splice(index, 1)
  },
  // 保存用户信息
  [SAVE_USER_INFO](state, payload) {
    state.userinfo = payload
    // 存储用户信息到本地
    window.localStorage.setItem('userinfo', JSON.stringify(payload))
  }
}