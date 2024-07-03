// pages/trun/turn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据格式固定，前两个的zIndex必须是最高的和第二高
    imageData:null,
    flag:true,
    index:0,
    des:'',
    webUrl:''
  },
  //鼠标点击杂志翻页
  setclass: function (e) {
    // console.log(e.currentTarget.dataset)
    const lastNum = this.data.imageData.length -1;
    if (e.currentTarget.dataset.index === lastNum){
      wx.showToast({
        title: '最后一张了',
        icon: 'success',
        duration: 2000
      })
     return
    }
    if(this.data.flag){
      this.data.flag=false;
      let imgs = this.data.imageData;
      let index = e.currentTarget.dataset.index;
      imgs.map((ele,i)=>{
        if (index == i) {
          imgs[i].isturn = !imgs[i].isturn;
          imgs[i].zIndex = 4;
        } else {
          imgs[i].zIndex = 1;
        }
      })
      if (index - 1 >= 0) {
        imgs[index - 1].zIndex = 3;
      }
      if (index + 1 < imgs.length) {
        imgs[index + 1].zIndex = 3;
      }
      if (index - 2 >= 0) {
        imgs[index - 2].zIndex = 2;
      }
      if (index + 2 < imgs.length) {
        imgs[index + 2].zIndex = 2;
      }
      this.setData({
        imageData: imgs,
      })
    }
    


  },
  //获取杂志详情信息
  getMagezineData(itemData){
    // console.log(itemData.pages)
    const magezineData = itemData.pages;
    const newData = magezineData.map((src, index) => {
      const zIndex = index === 0 ? 4 : index === 1 ? 3 : 1;
      return { src, isturn: false, zIndex };
    });
    this.setData({
      imageData:newData
    })
  },
  initLink (id) {
    console.log(id)
    const link = `https://www.nkdfilm.com/magazine?id=${id}`
    this.setData({
      webUrl:link
    })
  },

  onLoad: function (options) {
    const itemData = JSON.parse(options.data)
    console.log("itemData._id",itemData._id)
    // 用杂志itemData.id 去查这个杂志的pages
    // if(itemData){
    //   this.getMagezineData(itemData);
    // }

    // wx.setNavigationBarTitle({

    //   title: itemData.title,
    // })
    this.initLink(itemData._id);
    this.setData({
      des:itemData.des,
    })

  },
  start(){
    console.log('动画开始')
  },
  end(e){
    this.data.flag=true
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})