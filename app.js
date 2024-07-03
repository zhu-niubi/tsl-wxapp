// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    
  },
  globalData: {
    //本地token
    // userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbGludiIsImlkIjoiNjI2YjgxMDZhNzI1YzlhOWY4YzY0ZjExIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjk0NTczNzYwLCJleHAiOjE2OTYzMDE3NjB9.sEuWTdOqu8yyn4rPtww6jkolwNd4FFLwfxVusBPmDE8',
    hostUri: 'https://www.isfppf.com/api',//https://www.isfppf.com/api http://localhost:3001/api https://isf.nalinv.group/api
    // userInfo: wx.getStorageSync('userInfo'),
    appid: wx.getAccountInfoSync().miniProgram.appId
 }
})
