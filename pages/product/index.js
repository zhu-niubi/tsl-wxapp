import { request } from "../../utils/request";

// pages/product/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {
      cover:"",
      title:"",
      description:"",
    },
    productLines:null,
    productTree:{},
  },
  goProdetail(e){
    // console.log(e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/page3/products/index?id=${id}`,
    })
  },

  goBack(){
    // console.log(111)
    wx.navigateBack({
      delta:1
    })
  },

  getAllProduct(){
    const params = {
      pageIndex: 1,
      pageSize: 999,
      lang: 'en',
    };
    request({
      url:`/products`,
      method:"GET",
      data:params
    }).then((res) => {
      // console.log('res.data.data',res.data.data)
      const allProduct = res.data.data
      let productTree = {},
          uniqueNames = new Set(),
          list = [];
      if (res.code === 0) {
        for (const item of allProduct) {
          if (!uniqueNames.has(item.name)) {
            uniqueNames.add(item.name);
            list.push({
              id: item._id,
              name: item.name,
              typeName: item.typeName,
              cover: item.image[0]
            });
          }
        }
        
        list.forEach(item => {
          let key = ''
          if (item.typeName == "CLEAR PPF"){
            key = 'CLEAR PPF'
          }else if(item.typeName == "GLINTNG DIAMOND COLOR PPF"){
            key = 'GLINTNG DIAMOND COLOR PPF'
          }else if(item.typeName == "LIGHT FILM"){
            key = 'LIGHT FILM'
          }else if(item.typeName == "TRUE LACQUER COLOR PPF"){
            key = 'TRUE LACQUER COLOR PPF'
          }else if(item.typeName == "SUNROOF"){
            key = 'SUNROOF'
          }
          productTree.hasOwnProperty(key) ? productTree[key].push(item) : productTree[key] = [item];
        })
        console.log('productTree',productTree)

        this.setData({
          productLines:list,
          productTree:productTree
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getAllProduct();
    //后续使用这个id去接口拿数据，目前使用静态json
    // console.log('productId',options.id);
    let data = {
        cover:"https://isf-ppf.oss-cn-shanghai.aliyuncs.com/website/aboutIsf.jpg",
        title:"ISFPRODUCTLIST",
        description:"Super heat insulation and uv resistance,High light transmission does not offect sight,Excellent explosion-proof ability, energy-saving guardian.Super heat insulation and uv resistance."
      }
    this.setData({
      product:data,
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