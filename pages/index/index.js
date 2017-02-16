//index.js
//获取应用实例
var app = getApp();
var bmob = require('../../bmob/bmob.js');

var courses = [{ desc: "小小米鹿班", age: "3-4岁", number: "8人/班" }
  , { desc: "快乐启蒙班", age: "5-6岁", number: "10人/班" }
  , { desc: "缤纷畅想班", age: '7-8岁', number: "10人/班" }
  , { desc: "神奇探索班", age: '9-10岁', number: "10人/班" }
  , { desc: "大师创作班", age: '11-12岁', number: "10人/班" }
  , { desc: "创意素描水粉班", age: '13-14岁', number: "10人/班" }];
// var imgUrls = [
//   'https://p1.meituan.net/dpdeal/2d2450529fd38d5363fb3882528e151a76430.jpg',
//   'https://p1.meituan.net/dpdeal/0adc683a3efc6e6a54de618b66014fe12593493.jpg',
//   'https://p1.meituan.net/dpdeal/6fb12fde5d0cea480bdf5939bc0c0c114306877.jpg',
//   'https://p0.meituan.net/dpdeal/c8dc99b9fee2e0ae0941a4d1896c9ae43945579.jpg',
//   'https://p0.meituan.net/dpdeal/d5c25ca68dcc059addded451e069400960133.jpg'
// ];

// var imagesWithId = imgUrls.map((e, i) => {
//   return {
//     url: e,
//     id: i
//   }
// });

Page({
  isClicked: true,
  data: {
    bannerImages: null,
    courses: null,
    markers: [{
      iconPath: "/image/map_marker.png",
      id: 0,
      latitude: 118.793990,
      longitude: 32.040110,
      width: 64,
      height: 64
    }],
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
  }
})
