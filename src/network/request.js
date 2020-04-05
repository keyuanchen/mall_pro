import axios from 'axios'
import store from '../store'

export default function request(config) {
  // 创建axios的一个实例
  const instance = axios.create({
    // 想获取接口地址，私信
    // baseUrl: 'http://156.66.56.32:8000/api',
    // baseURL: "http://152.136.185.210:8000/api/h8",
    // baseURL: "http://123.207.32.32:8000/api/h8",
    baseURL: "http://106.54.54.237:8000/api/h8",
    timeout: 5000
  })
  // return new Promise((resolve, reject) => {
  //   instance(config)
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => {
  //       reject(err)
  //     })
  // })
  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 当发送每一个请求的时候，发送成功出现一个loading图标，服务器返回数据后图标消失
    // 显示loading
    store.commit('mutateLoadingState', true)
    // 配置token
    // 进行请求参数的序列化（需要看服务器是否需要）
    return config
  }, err => {
    return err
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    store.commit('mutateLoadingState', false)
    return res
  }, err => {
    return err
  })

  return instance(config)
}