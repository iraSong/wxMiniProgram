import { BASE_PATH, TOKEN_BASE_PATH } from './config'
import store from '@/store/index'
import refreshToken from '@/utils/refreshToken'
import { msg, showLoading, hideLoading } from '@/utils/mutual'

export default {
  async getUserInfo() {
    let data = await new Promise((resolve, reject) => {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: resolve,
            fail: reject
          })
        }
      })
    })
    return data
  },
  async httpRequest(options = {}) {
    let data = await new Promise((resolve, reject) => {
      showLoading()
      let token = store.state.token
      let headers = {
        'content-type': 'application/json'
      }
      if (token) {
        headers['access_token'] = token.access_token
        headers['channel'] = 'WXCOURSE'
      }
      let url = `${BASE_PATH}${options.url}?_=${Date.now()}` // 加时间搓 去掉接口缓存

      wx.request({
        url: url,
        data: Object.assign({}, options.data),
        method: options.methods || 'GET',
        header: headers,
        success(data) {
          if (+data.data.code === 0) {
            resolve(data.data)
          } else if (data.data.code === '00000021') {
            // token 失效
            refreshToken('GET', `${BASE_PATH}/fortune/token`, {
              channel: 'WXCSRL',
              grantType: 'refresh_token',
              refreshToken: token.refresh_token
            })
              .catch((err) => {
                reject(err)
              })
          } else {
            msg(data.data.msg || '系统或网络异常', 'none')
            reject(data)
          }
        },
        fail(error) {
          reject(error)
          msg(error.errMsg || '网络错误，请重试')
        },
        complete() {
          hideLoading()
        }
      })
    })
    return data
  }
}
