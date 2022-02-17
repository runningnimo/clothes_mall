import axios from 'axios'

export function request(config) {
  // 1.创建axios实例instance
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2.设置发送请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      console.log(err)
    }
  )
  // 3.设置收到response拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )
  // 4.返回请求实例
  return instance(config)
}
