//index.js
//获取应用实例
var app = getApp();
import model from '../../model/model';

const PHONE_NUMBER = "18013914800";
const ADDRESS = "太平南路2号日月大厦1603室";
const COMPANY = "米鹿儿童美术馆";

const CONSTANT = model.CONSTANT;

Page({
  data: {
    bannerImages: CONSTANT.DEFAULT_BANNER_IMAGE,
    indicatorDots: false,
    courses: [],
    teachers: [],
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
  onCourseTap: function (e) {
    let id = e.currentTarget.id;
    console.log('onCourseTap: ' + JSON.stringify(e, null, 2));
    // wx.showModal({title: "u r clicked"})

    let course = this.data.courses[id];
    let navUrl = '../detail/detail?'
     + 'courseName=' + course.courseName
     + '&courseOutline=' + course.courseOutline
     + '&teachSubject=' + course.teachSubject
     + '&courseNum=' + course.courseNum
     + '&lessonTime=' + course.lessonTime
     + '&courseNumDesc=' + course.courseNumDesc;
    wx.navigateTo({
      url: navUrl,
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
  onBannerImageTap: function (e) {
    var id = e.currentTarget.id, list = this.data.bannerImages;
    var imageUrls = this.data.bannerImages.map((e) => e.url);
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
  onTeacherTap: function (e) {
    var id = e.currentTarget.id;
    console.log('tap id: ' + id)
    wx.showModal({
      title: this.data.teachers[id].name,
      content: this.data.teachers[id].description,
      showCancel: false,
    })
  },
  updateData: function () {
    this.updateBanner();
    this.updateCourses();
    this.updateTeacher();
  },
  updateBanner: function () {
    model.getBannerImages(result => {
      this.setData({
        bannerImages: result,
        indicatorDots: true,
      })
    }, error => {
      console.log("查询失败: " + error.code + " " + error.message);
    })
  },
  updateCourses: function () {
    model.getCourses(result => {
      this.setData({
        courses: result
      })
    }, err => {
      console.log("查询失败: " + error.code + " " + error.message);
    });
  },
  updateTeacher: function () {
    model.getTeachers(result => {
      this.setData({
        teachers: result
      })
    }, err => {
      console.log("查询失败: " + error.code + " " + error.message);
    })
  },
  openLocation: function (e) {
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
