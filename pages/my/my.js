//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    courseTitle: ''
  },
  onLoad: function () {
    console.log('onLoad')
    this.setData({
      courseTitle:"小小米鹿班"
    })
    let that = this;
    wx.request({
      url: 'http://open.play.cn/api/v2/egame/host.json/',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        setTimeout(() => {
        that.setData({
          courseTitle: res.data
        })
        }, 1000)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
})
