// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (uni) => {
  // 此为自定义配置参数，具体参数见上方说明
  uni.$u.http.setConfig({
    baseUrl: 'http://47.111.240.180:3303',
    // 设置为json，返回后会对数据进行一次JSON.parse()
    dataType: 'json',
    showLoading: true, // 是否显示请求中的loading
    loadingText: '请求中...', // 请求loading中的文字提示
    loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
    originalData: false, // 是否在拦截器中返回服务端的原始数据
    loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    // 配置请求头信息
    header: {
      'content-type': 'application/json;charset=UTF-8'
    },
    errorHandler: (err) => {
      console.log('错误处理', err)
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
  })

  // 请求拦截，配置Token等参数
  uni.$u.http.interceptor.request = (config) => {
    // 引用token
    const publicArr = [/\/public/, /\/login/]
    let isPublic = false
    publicArr.forEach(path => {
      isPublic = isPublic || path.test(config.url)
    })
    const token = uni.getStorageSync('token')
    if (!isPublic && token) {
      config.header = Object.assign({}, config.header, {
        Authorization: `Bearer ${token}`
      })
    }

    // 最后需要将config进行return
    return config
    // 如果return一个false值，则会取消本次请求
    // if(config.url === '/user/rest') return false; // 取消某次请求
  }

  // 响应拦截，判断状态码是否通过
  uni.$u.http.interceptor.response = (res) => {
    console.log('响应拦截器', res)
    return res
  }
}

export default {
  install
}
