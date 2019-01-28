import store from '@/store/index'
import wxService from '@/api/wxService'

export function wxLogin() {
  return new Promise(function(resolve, reject) {
    wx.login({
      success(res) {
        console.log(res.code)
        if (res.code) {
          // 发起网络请求 获取 登录 token
          wxService.httpRequest({
            url: '/auth/token',
            data: {
              channel: 'WXCSRL',
              code: res.code,
              grantType: 'authorization_code'
            }
          })
            .then((res) => {
              store.commit('setToken', res.data)
              resolve(res)
            })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
      fail(e) {
        console.log(e)
      }
    })
  })
}

export function checkLogin(token = store.state.token) {
  return new Promise((resolve) => {
    if(token){
      resolve()
    } else {
      wxLogin()
        .then(() => {
          resolve()
        })
    }
  })
}

export function checkSession() {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success() {
        wxLogin()
          .then(() => {
            resolve()
          })
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        wxLogin()
          .then(() => {
            resolve()
          })
      }
    })
  })
}
