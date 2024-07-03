// index.js
// 获取应用实例
const app = getApp();
const globalData = app.globalData;
import { request } from "../../utils/request.js"
Page({
  data: {
    magazineList: null,
    SlideConfig: {
      title: 'WELCOME TO',
      title1: 'ISF CHINA',
      descript: 'HIGH-END WHOLE INDUSTRIAL CHAIN PPF MANUFACTURER',
      descript1: 'Deeply engaged in PPF research',
      descript2: 'development and innovation'
    },
    info: null,
    currentSwiperIndex: 0,
    videoSrc: '',
    videoImg: '',
    autoplay: true,
    productList: null,
  },
    //获取杂志信息
    getMagazineList() {
      const params = {
        pageIndex: 1,
        pageSize: 999,
      };
      request({
        url: `/magazines`,
        method: "GET",
        data: params
      }).then((res) => {
        console.log('magezine', res)
        this.setData({
          magazineList: res.data
        })
  
      })
     
    },

  //跳转到全部产品列表
  goAllProduct() {
    wx.navigateTo({
      url: `/pages/product/index`,
    })
  },

  //跳转到产品类型详情
  goProductTypeDetail(e) {
    const typeId = e.currentTarget.dataset.id
    // const description = data.description
    // console.log('data',data)
    wx.navigateTo({
      url: `/pages/productDetail/index?typeId=${typeId}`,
    })
  },

  //查询所有产品
  getAllProductType() {
    const params = {
      pageIndex: 1,
      pageSize: 10,
      lang: 'en',
    };
    request({
      url: `/productType`,
      method: "GET",
      data: params
    }).then((res) => {
      // console.log('res.data.data', res.data.data)
      if (res.code === 0) {
        this.setData({
          productList: res.data.data
        })
      }
    })
  },

  //跳转视频指南
  gotoVideo(e) {
    wx.navigateTo({
      url: '/pages/video/index',
    })
  },

  //首页图片banner跳转产品详情
  gotoProduct(e) {
    // console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.productId == null) {
      return
    }
    const { productId } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/product/index?id=${productId}`,
    })
  },

  //跳转杂志详情
  gotoMagazineDetail(e) {
    // console.log(e.currentTarget.dataset.item)
    const data = JSON.stringify(e.currentTarget.dataset.item)
    wx.navigateTo({
      url: `/pages/magazine/index?data=${data}`,
    })
  },

  //鼠标更换banner图主题文字更改
  changeCurrent(e) {
    let current = e.detail.current,
      config = this.data.SlideConfig;
    // console.log(current)
    if (current === 1) {
      config = {
        title: 'My World',
        title1: 'ISF-CHINA',
        descript: 'HIGH-END WHOLE INDUSTRIAL CHAIN PPF MANUFACTURER',
        descript1: 'Deeply engaged in PPF research',
        descript2: 'development and innovation'
      }
    } else if (current === 2) {
      config = {
        title: 'New World',
        title1: 'ISF CHINA',
        descript: 'HIGH-END WHOLE INDUSTRIAL CHAIN PPF MANUFACTURER',
        descript1: 'Deeply engaged in PPF research',
        descript2: 'development and innovation'
      }
    } else {
      config = {
        title: 'WELCOME TO',
        title1: 'ISF CHINA',
        descript: 'HIGH-END WHOLE INDUSTRIAL CHAIN PPF MANUFACTURER',
        descript1: 'Deeply engaged in PPF research',
        descript2: 'development and innovation'
      }
    }
    this.setData({
      SlideConfig: config,
      currentSwiperIndex: current
    })

  },


  //获取slide信息
  getSlideList() {
    const slideList = [
      {
        img: 'https://isf-ppf.oss-cn-shanghai.aliyuncs.com/wxapp/slideVideo.mp4',
        type: 'video',
        title: 'ISFFILM',
        productId: 0,
      },
      {
        img: 'https://isf-ppf.oss-cn-shanghai.aliyuncs.com/wxapp/slide1.jpg',
        type: 'img',
        title: 'SUNROOT',
        productId: 1,

      },
      {
        img: 'https://isf-ppf.oss-cn-shanghai.aliyuncs.com/wxapp/slide2.jpg',
        type: 'img',
        title: 'LIGHTFILM',
        productId: 2,
      },

    ];
    this.setData({
      info: slideList
    })
  },
  onShow() {

  },

  getMagazine(){
  //  const params = {
  //     pageIndex: 1,
  //     pageSize: 10,
  //     lang: 'en',
  //   };
  //   wx.request({
  //     url: `https://cms.nalinv.group/api/products?filters[status][$eq]=1&populate=*&filter[category][$eq]=0&sort[0]=updatedAt%3Adesc&pagination[page]=1&pagination[pageSize]=3`,
  //     method: "GET",
  //     header: {
  //       'content-type':'application/json',
  //       'Authorization':'Bearer b0d62794222118698ba5d2f2f08289cc6138e8d790db1604d9e475552524d4406847eafafa8f3d4b27e3a774c9228ab1d50c37b945faa696b7474b9a7d233a89a34a9ed454e3e4b74095122f7b724c977e9e1c097fe6f9501f388c24f119f33abd09565c6a351894a270eec22b8d5136b02720a65bb1f4dcade99504bce43dbe',
  //     },
  //     success:function (res) {
  //            console.log('res',res)
  //     }
  //   })
  },
  onLoad(options) {
    this.getMagazineList();
    this.getSlideList();
    this.getAllProductType();
    this.getMagazine()
    // console.log('globalData',globalData)
  },


})
