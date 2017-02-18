var bmob = require('../bmob/bmob.js');

function getBannerImages(successFn, errFn) {
    var query = new bmob.Query(bmob.Object.extend("res"));
    // 查询所有数据
    query.equalTo('showAt', 'banner');
    query.find({
        success: results => {
            var images = results.map((e, i) => {
                return {
                    url: e.get('url')._url,
                    id: i,
                }
            })
            
            if (typeof successFn === 'function') {
                successFn(images);
            }
        },
        error: error => {
            if (typeof errFn === 'function') {
                errFn(error);
            }
        }
    });
}

module.exports = {
    getBannerImages
};