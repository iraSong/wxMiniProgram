import axios from 'axios'
import { BASE_PATH } from './config'
import store from '@/store/index'

// import refreshToken from '../util/refreshToken'

// 创建axios实例
var service = axios.create({
  baseURL: BASE_PATH, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    try {
      let token = JSON.parse(window.localStorage.getItem('gxUser'))
      if (token) {
        config.headers.common['x-access-token'] = token.access_token
      }
    } catch (err) {
      console.log(err)
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    if ((response.status === 400 || response.status === 401 || response.status === 0) && response.config.url.indexOf('/token') === -1) {
      // 当 Token 已经失效，续期
      // refreshToken()
      window.location.href = 'index.html'
    } else if (response.data.code === '00000021'){
      // refreshToken()
      window.location.href = 'index.html'
    } else if( +response.status === 200 && (+response.data.code ===0 || +response.data.code===1000000 || response.config.url.indexOf('/export') > -1)){
      return response
    } else {
      return Promise.reject()
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  //ajax请求
  async httpRequest(options = {}) {
    let token = store.state.token
    let headers = {
      'content-type': 'application/json'
    }
    if (token) {
      headers['access_token'] = token.access_token
      headers['channel'] = 'WXCOURSE'
    }
    let url = `${BASE_PATH}${options.url}?_=${Date.now()}` // 加时间搓 去掉接口缓存

    return await service({
      url: url,
      data: Object.assign({}, options.data),
      method: options.methods || 'GET',
      header: headers
    })
  }
}


