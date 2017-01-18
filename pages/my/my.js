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
  },
})
