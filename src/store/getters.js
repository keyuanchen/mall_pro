export default {
  product(state) {
    return state.products.filter(item => item.check)
  },
  totalPrice(state) {
    return '¥' + state.products.filter(item => item.check).reduce((pre, i) => {
      return pre + parseInt(i.price * i.count)
    }, 0)
  },
  checkedCount(state) {
    return state.products.filter(item => item.check).length
  }
}