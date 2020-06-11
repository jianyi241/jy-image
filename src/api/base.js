import axios from 'axios'

// axios 基础配置
axios.defaults.timeout = 150000
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => { // 发送请求之前要做的事
  return config
}, error => { // 请求错误要做的事
  alert(error.message)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => { // 响应数据要做的事
  return response
}, error => { // 数据响应失败要做的事
  if (!(error && error.response)) {
    error.message = '连接服务器失败!'
  } else {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误(400)'
        break
      case 401:
        return history.push('/')
        // eslint-disable-next-line no-unreachable
        break
      case 403:
        error.message = '拒绝访问(403)'
        break
      case 404:
        error.message = '请求出错(404)'
        break
      case 408:
        error.message = '请求超时(408)'
        break
      case 500:
        error.message = '服务器错误(500)'
        break
      case 501:
        error.message = '服务未实现(501)'
        break
      case 502:
        error.message = '网络错误(502)'
        break
      case 503:
        error.message = '服务不可用(503)'
        break
      case 504:
        error.message = '网络超时(504)'
        break
      case 505:
        error.message = 'HTTP版本不受支持(505)'
        break
      default:
        error.message = `连接出错(${error.response.status})!`
    }
  }
  alert(error.message)
  return Promise.reject(error)
})

export default axios
