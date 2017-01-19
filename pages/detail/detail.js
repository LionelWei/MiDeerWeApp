//index.js
//获取应用实例
var app = getApp()
var courseOverView = [
  {level: 0, desc: "教学对象：3至4周岁 (8人/班) \n\
  学费： 1800+200(材料费) \n\
  课程大纲：\n\
  1.	通过涂鸦游戏提高孩子对美术的兴趣，让孩子的情绪在绘画中得到健康的释放。\n\
  2.	学习内容有点、线、色彩的基本表现与认识，包括水粉涂鸦、综合材料拼贴，各种材料印画等绘画材料的运用。\n\
  3.	在亲子班的绘画活动中，孩子们通过观察、交流等方式，与家长、老师及同伴互动，从而身心得到全面发展。\n\
  以上课程价格含学费、报名费。\n\
  每学期18节课，含每周一次美术课、每月一次手工课，均为90分钟/节课。"}
  ]
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    courseTitle: '',
    courseOverView: courseOverView[0].desc
  },
  onLoad: function () {
    console.log('onLoad')
    this.setData({
      courseTitle:"小小米鹿班"
    })
  },
})
