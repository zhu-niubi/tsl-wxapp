// pages/products/index.js
import { request } from "../../utils/request";
const dayjs = require('dayjs');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productInfo:null,
    footerConfig:null,
    // bgImg:null
  },
  //获取页脚配置
  getFooterConfig(){
    const id = "629323104816c5f1bb80f54f";
    request({
      url:`/websiteConfig/${id}`,
      method:"GET",
    }).then((res) => {
      // console.log(res.data.data.footer)
      this.setData({
        footerConfig:res.data.data.footer,
        // bgImg:res.data.data.footer.partners.bgImg[0] === '/' ? 'https://www.isfppf.com' + res.data.data.footer.partners.bgImg : res.data.data.footer.partners.bgImg
      })

    })
  },

  goBack(){
    // console.log(111)
    wx.navigateBack({
      delta:1
    })
  },


  getOnePoduct(id){
    const pid =id;
    request({
      url:`/products/${pid}`,
      method:"GET",
    }).then((res) => {
      console.log(res.data);
      const Info = res.data;
      // Info.createdAt = date.formatDate(Info.createdAt, 'YYYY-MM-DD HH:mm:ss');
      // Info.updatedAt = date.formatDate(Info.updatedAt, 'YYYY-MM-DD HH:mm:ss');
      Info.createdAt = dayjs(Info.createdAt).format('YYYY-MM-DD');
      Info.updatedAt = dayjs(Info.updatedAt).format('YYYY-MM-DD')
      this.setData({
        productInfo:Info
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options)
    this.getOnePoduct(options.id);
    this.getFooterConfig();
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