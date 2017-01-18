//index.js
//获取应用实例
var app = getApp()
var courses = [{desc: "小小米鹿班", age: "3-4岁", number: "8人/班"}
              ,{desc: "快乐启蒙班", age: "5-6岁", number: "10人/班"}
              ,{desc: "缤纷畅想班", age: '7-8岁', number: "10人/班"}
              ,{desc: "神奇探索班", age: '9-10岁', number: "10人/班"}
              ,{desc: "大师创作班", age: '11-12岁', number: "10人/班"}
              ,{desc: "创意素描水粉班", age: '13-14岁', number: "10人/班"}]
Page({
  isClicked: true,
  data: {
    courses: courses
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log(JSON.stringify(userInfo, null, 2));
    })
  },
  onCourseTap: function() {
    // wx.showModal({title: "u r clicked"})
    wx.navigateTo({
      url: '../detail/detail',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
