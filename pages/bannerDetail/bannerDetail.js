import model from '../../model/model';
var app = getApp();

Page({
  data: {
    bannerImages: [],
    firstId: 0,
  },
  onLoad: function (options) {
    let firstId = 0;
    if ('firstId' in options) {
      firstId = options['firstId'];
    }
    this.updateBanner(firstId);
  },
  updateBanner: function(firstId) {
    model.getBannerImages(result => {
      this.setData({
        bannerImages: result,
        firstId: firstId,
      });
    }, error => {
      console.log("查询失败: " + error.code + " " + error.message);
    })
  },
  onBannerImageTap: function(e) {
    wx.navigateBack();
  },
})
