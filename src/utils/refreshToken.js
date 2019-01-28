import { showLoading, hideLoading, msg } from './mutual'
import { wxLogin } from '@/utils/wx-login'
import { REFRESH_CODE } from '@/api/config'
import store from '@/store/index'

function refreshToken(method, url, data) {
  return new Promise(function(resolve, reject) {
    var headers = {
      'content-type': 'application/json'
    }

    showLoading()
    wx.request({
      method,
      url,
      data,
      header: headers,
      dataType: 'json',
      success(res) {
        if (res.data.code === REFRESH_CODE) {
          store.commit('setToken', '')
          // 无法续期
          wxLogin()
            .then(() => {
              reject(REFRESH_CODE)
            })
        } else {
          // 续期成功
          store.commit('setToken', res.data.data)
          reject(REFRESH_CODE)
        }
        resolve(res)
      },
      fail(error) {
        reject(error)
        msg(error)
      },
      complete() {
        hideLoading()
      }
    })
  })
}

export default (method = 'POST', url, data) => {
  return refreshToken(method, url, data)
}
