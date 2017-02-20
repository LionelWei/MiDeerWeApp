//获取应用实例
var app = getApp()
import model from '../../model/model';

Page({
  data: {
    imageUrls: [],
    courseId: 0,
    courseOutline: '',
    teachObject: '',
    couserNum: '',
    lessonTime: '',
    courseNumDesc: '',
  },
  onLoad: function (options) {
    let courseId = options['courseId'] || 0;
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
      courseId: courseId,
      courseOutline: outline,
      teachSubject: subject,
      courseNum: courseNum,
      lessonTime: lessonTime,
      courseNumDesc: courseNumDesc,
    })
    this.updateImageResources(courseId);
  },
  updateImageResources: function (courseId) {
    model.getCourseResource(courseId, imgs => {
      this.setData({
        imageUrls: imgs,
      });
    }, err => {

    })
  },
  onBannerImageTap: function (e) {
    var id = e.currentTarget.id;
    var imageUrls = this.data.imageUrls;
    wx.navigateTo({
      url: '../bannerDetail/bannerDetail?'
      + 'firstId=' + id
      + '&imgs=' + imageUrls,
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
