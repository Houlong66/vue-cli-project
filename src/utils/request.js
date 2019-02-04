import axios from 'axios'
// import router from '@/router'

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000 // 请求超时
})

request.interceptors.request.use(
  config => {
    // 这里可以添加一些自定义的config设置，如token
    return config
  },
  error => {
    // 这里处理一些请求出错的情况
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    // 这里处理一些response 正常放回时的逻辑
    return res
  },
  error => {
    // 这列处理一些response出错的逻辑
    return Promise.reject(error)
  }
)

export default request