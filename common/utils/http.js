// 这个文件使用uni.request进行封装

const errorHandler = (err) => {
  if (err.statusCode === 401) {
    // todo 业务
  } else {
    // 其他错误
    uni.showToast({
      icon: 'none',
      title: err.message || '请求异常，请重试',
      duration: 2000
    })
  }
}

export const request = (options = {}) => {
  const { success, fail } = options

  const publicArr = [/\/public/, /\/login/]
  let isPublic = false
  publicArr.forEach(path => {
    isPublic = isPublic || path.test(options.url)
  })
  const token = uni.getStorageSync('token')
  if (!isPublic && token) {
    options.header = Object.assign({}, options.header, {
      Authorization: `Bearer ${token}`
    })
  }

  return new Promise((resolve, reject) => {
    uni.request(Object.assign({}, options, {
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          if (success && typeof success === 'function') {
            success(res.data)
            return
          }
          resolve(res.data)
        } else {
          errorHandler(res)
          reject(res)
        }
      },
      fail: (err) => {
        if (fail && typeof fail === 'function') {
          fail(err)
          return
        }
        errorHandler(err)
        reject(err)
      }
    }))
  })
}
