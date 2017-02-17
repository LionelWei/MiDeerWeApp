//index.js
//获取应用实例
var app = getApp();
var bmob = require('../../bmob/bmob.js');

const PHONE_NUMBER = "18013914800";
const ADDRESS = "太平南路2号日月大厦1603室";
const COMPANY = "米鹿儿童美术馆";

Page({
  isClicked: true,
  data: {
    bannerImages: null,
    courses: null,
    phoneNumber: PHONE_NUMBER,
    address: ADDRESS,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      console.log(JSON.stringify(userInfo, null, 2));
    })
    this.updateData();
  },
  onCourseTap: function () {
    // wx.showModal({title: "u r clicked"})
    wx.navigateTo({
      url: '../detail/detail',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onBrandTap: function () {
    console.log('onBrandTap');
    wx.navigateTo({
      url: '../brand/brand',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onBannerImageTap: function(e) {
    var id = e.currentTarget.id, list = this.data.bannerImages;
    console.log(id + ' is clicked: ' + list[id].url);
  },
  updateData: function () {
    this.getBanner();
    this.getCourses();
  },
  getBanner: function() {
    var query = new bmob.Query(bmob.Object.extend("res"));
    var that = this;
    // 查询所有数据
    query.equalTo('showAt', 'banner');
    query.find({
      success: function (results) {
        var images = results.map((e, i) => {
          return {
            url: e.get('url')._url,
            id: i,
          }
        })
        that.setData({
          bannerImages: images
        })
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },
  getCourses: function() {
    var query = new bmob.Query(bmob.Object.extend("courses"));
    var that = this;
    // 查询所有数据
    query.find({
      success: function (results) {
        var courses = results.map((e, i) => {
          return {
            courseType: e.get('courseType'),
            courseNum: e.get('courseNum'),
            courseName: e.get('courseName'),
            ageRange: e.get('ageRange'),
            icon: e.get('courseFirstImage')._url,
            feature: e.get('feature'),
          }
        })
        that.setData({
          courses: courses
        })
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });    
  },
  openLocation: function(e) {
    wx.openLocation({
      latitude: 32.040110, // 纬度，范围为-90~90，负数表示南纬
      longitude: 118.793990, // 经度，范围为-180~180，负数表示西经
      scale: 16, // 缩放比例
      name: COMPANY, // 位置名
      address: ADDRESS, // 地址的详细说明
    })
  },
  callTelephone: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: PHONE_NUMBER,
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
})
