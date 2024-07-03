// pages/product/index.js
const app = getApp();
import { request } from "../../utils/request.js";
const dayjs = require('dayjs');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerConfig:null,
    product: {
      cover:"",
      title:"",
      description:"",
    },
    productLines:null,
  },

  goBack(){
    // console.log(111)
    wx.navigateBack({
      delta:1
    })
  },
  getTypeDetail(typeId){
    request({
      url:`/productType/${typeId}`,
      method:"GET",
    }).then((res) => {
      
      const typeDetail = res.data;
      typeDetail.createdAt = dayjs(typeDetail.createdAt).format('YYYY-MM-DD');
      typeDetail.updatedAt = dayjs(typeDetail.updatedAt).format('YYYY-MM-DD')
      console.log(typeDetail);
      this.setData({
        product:typeDetail
      })
    })
  },
  getFooterConfig(){
    const id = "629323104816c5f1bb80f54f";
    request({
      url:`/websiteConfig/${id}`,
      method:"GET",
    }).then((res) => {
      // console.log(res.data.data.footer)
      this.setData({
        footerConfig:res.data.data.footer
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    const typeId = options.typeId;
    console.log(typeId)
    this.getTypeDetail(typeId);
    this.getFooterConfig();
    let config;
    if (1){
      
      config = [
        {
          name:"抗氧化，耐疲劳",
          price:999,
          tire_size:19,
          deadLine:720,
        },
        {
          name:"防爆晒，耐划痕",
          price:888,
          tire_size:18,
          deadLine:863,
        },
        {
          name:"异物污浊，褶皱",
          price:888,
          tire_size:18,
          deadLine:863,
        }
      ];
    }
    
    this.setData({
      // product:data,
      productLines:config
    })
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