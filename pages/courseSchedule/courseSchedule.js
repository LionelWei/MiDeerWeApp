import model from '../../model/model';
var app = getApp();

Page({
    data: {
        scheduleImage: '',
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '课程表'
        });
        this.updateSchedule();
    },
    updateSchedule: function (firstId) {
        model.getSchedule(result => {
            this.setData({
                scheduleImage: result,
            });
        }, error => {
            console.log("查询失败: " + error.code + " " + error.message);
        })
    },
    onScheduleImageTap: function (e) {
        // wx.showModal({
        //     title: '课程表',
        //     content: '是否保存课程表至系统相册',
        //     success: () => {
        //         wx.downloadFile({
        //           url: this.data.scheduleImage,
        //           type: 'image',
        //           // header: {}, // 设置请求的 header
        //           success: function(res){
        //             wx.saveFile({
        //               tempFilePath: res.tempFilePath,
        //               success: function(res){
        //                 wx.showModal({
        //                     title: '已保存',
        //                     contennt: res.tempFilePath,
        //                 })
        //                 // success
        //               },
        //               fail: function() {
        //                 // fail
        //               },
        //               complete: function() {
        //                 // complete
        //               }
        //             })
        //           },
        //           fail: function() {
        //             // fail
        //           },
        //           complete: function() {
        //             // complete
        //           }
        //         })
        //     }
        // })
    },
})
