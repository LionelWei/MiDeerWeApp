var bmob = require('./bmob/bmob.js');

function getBannerImages(successFn, errFn) {
    var query = new bmob.Query(bmob.Object.extend("res"));
    // 查询所有数据
    query.equalTo('showAt', 'banner').ascending('order');
    query.find({
        success: results => {
            var images = results.map((e, i) => {
                return e.get('url')._url;
            })
            successFn(images);
        },
        error: error => {
            errFn(error);
        }
    });
}

module.exports = {
    getBannerImages
};
