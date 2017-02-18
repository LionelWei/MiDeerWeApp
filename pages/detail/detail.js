//index.js
//获取应用实例
var app = getApp()
import model from '../../model/model';

Page({
  data: {
    imgUrls: [
      'https://p1.meituan.net/dpdeal/2d2450529fd38d5363fb3882528e151a76430.jpg',
    'https://p1.meituan.net/dpdeal/0adc683a3efc6e6a54de618b66014fe12593493.jpg',
      'https://p1.meituan.net/dpdeal/6fb12fde5d0cea480bdf5939bc0c0c114306877.jpg',
      'https://p0.meituan.net/dpdeal/c8dc99b9fee2e0ae0941a4d1896c9ae43945579.jpg',
      'https://p0.meituan.net/dpdeal/d5c25ca68dcc059addded451e069400960133.jpg'
    ],
    courseOutline: '',
    teachObject: '',
    couserNum: '',
    lessonTime: '',
    courseNumDesc: '',
  },
  onLoad: function (options) {
    console.log('detail onLoad: ' + JSON.stringify(options, null, 2));
    let courseName = options['courseName'] || '';
    let outline = options['courseOutline'] || '';
    let subject = options['teachSubject'] || '';
    let courseNum = options['courseNum'] || '';
    let lessonTime = options['lessonTime'] || '';
    let courseNumDesc = options['courseNumDesc'] || '';
    wx.setNavigationBarTitle({
      title: courseName
    });
    this.setData({
      courseOutline: outline,
      teachSubject: subject,
      courseNum: courseNum,
      lessonTime: lessonTime,
      courseNumDesc: courseNumDesc,
    })
  },
  onBannerImageTap: function (e) {
    var id = e.currentTarget.id;
    var imageUrls = this.data.imageUrls;
    wx.navigateTo({
      url: '../bannerDetail/bannerDetail?firstId=' + id,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
  },
})
