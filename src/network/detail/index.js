import request from '../request'

export function getDetailTotalInfo(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommendInfo() {
  return request({
    url: '/recommend'
  })
}