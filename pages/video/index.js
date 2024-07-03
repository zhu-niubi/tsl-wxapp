// pages/video/index.js
import { request } from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoTree: {},
    liveList:[],
    videoLink: null,
  },

  
  goBack(){
    // console.log(111)
    wx.navigateBack({
      delta:1
    })
  },
  stopVideo(){
    this.videoContext.pause();
  
  this.setData({
    videoLink: null,
  })
  },
  gotoTv(e){
    var that = this
    console.log(e.currentTarget.dataset.id)
    // console.log(this.data.liveList[e.currentTarget.dataset.id].uri)
    this.setData({
      videoLink: this.data.liveList[e.currentTarget.dataset.id].uri,
    })
    console.log(this.data.videoLink)
    this.videoContext.exitFullScreen();
    
    setTimeout(function() {
      that.videoContext.play()
    }, 500)
},
leaveVideo: function() {
  this.videoContext.pause();
  
  this.setData({
    videoLink: null,
  })
},
initVideo(){
  const params = {
    pageIndex: 1,
    pageSize: 999,
  };
  request({
    url: `/videos`,
    method: "GET",
    data: params
  }).then((res) => {
    console.log('video', res.data)
    this.setData({
      liveList: res.data
    })

  })

 
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.videoContext = wx.createVideoContext('videoId');
    // console.log('videoContext',this.videoContext)
    this.initVideo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})