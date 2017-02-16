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
var imgUrls = [
  'https://p1.meituan.net/dpdeal/2d2450529fd38d5363fb3882528e151a76430.jpg',
  'https://p1.meituan.net/dpdeal/0adc683a3efc6e6a54de618b66014fe12593493.jpg',
  'https://p1.meituan.net/dpdeal/6fb12fde5d0cea480bdf5939bc0c0c114306877.jpg',
  'https://p0.meituan.net/dpdeal/c8dc99b9fee2e0ae0941a4d1896c9ae43945579.jpg',
  'https://p0.meituan.net/dpdeal/d5c25ca68dcc059addded451e069400960133.jpg'
];

var imagesWithId = imgUrls.map((e, i) => {
  return {
    url: e,
    id: i
  }
});

Page({
  isClicked: true,
  data: {
    bannerImages: imagesWithId,
    courses: courses,
    indicatorDots: true
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
    this.getData();
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
  getData: function () {
    var Diary = bmob.Object.extend("mideer1");
    var query = new bmob.Query(Diary);
    // 查询所有数据
    query.find({
      success: function (results) {
        // wx.showModal({
        //   title: "成功",
        //   content: "共查询到 " + results.length + " 条记录"
        // })
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id + ' - ' + object.get('title'));
        }
      },
      error: function (error) {
        // wx.showModal({
        //   title: "失败",
        //   content: "查询失败: " + error.code + " " + error.message
        // })
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  }
})
