import model from '../../model/model';
var app = getApp();

Page({
  data: {
    bannerImages: model.DEFAULT_BANNER_IMAGE,
    firstId: 0,
  },
  onLoad: function (options) {
    let firstId = 0;
    if ('firstId' in options) {
      firstId = options['firstId'];
    }
    let imgs = [];
    if ('imgs' in options) {
      imgs = options['imgs'].split(',');
    }
    this.setData({
        bannerImages: imgs,
        firstId: firstId,      
    })
  },
  onBannerImageTap: function(e) {
    wx.navigateBack();
  },
})
