// 显示loading
export function showLoading(title) {
  wx.showLoading({
    title: title || 'Loading...',
    mask: true
  })
}

// 隐藏loading
export function hideLoading() {
  wx.hideLoading()
}

// 提示
export function msg(title = '', icon = 'none', duration) {
  wx.showToast({
    title,
    icon: icon,
    duration: duration || 2000
  })
}

// 成功提示
export function success(title = '', duration) {
  wx.showToast({
    title,
    icon: 'none',
    duration: duration || 2000
  })
}

// confirm
export function confirm(content, title = '温馨提示', confirmText = '确定', cancelText = '取消') {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title,
      content,
      confirmText,
      cancelText,
      confirmColor: '#E13030',
      cancelColor: '#3D3D3D',
      success(res) {
        if (res.confirm) {
          resolve('用户点击确定')
        } else if (res.cancel) {
          reject(new Error('用户点击取消'))
        }
      }
    })
  })
}

export function showActionSheet(itemList) {
  return new Promise((resolve, reject) => {
    wx.showActionSheet({
      itemList,
      success(res) {
        resolve(res.tapIndex)
      },
      fail(res) {
        reject(new Error(res.errMsg))
      }
    })
  })
}
