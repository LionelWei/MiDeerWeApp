var bmob = require('../bmob/bmob.js');

function getSchedule(successFn, errFn) {
    var query = new bmob.Query(bmob.Object.extend("res"));
    // 查询所有数据
    query.equalTo('showAt', 'courseSchedule').equalTo('source', 'courseSchedule');
    query.find({
        success: results => {
            var images = results.map((e, i) => {
                return {
                    url: e.get('url')._url,
                    name: e.get('name'),
                    description: e.get('description'),
                }
            })
            
            console.log('getSchedule: ' + JSON.stringify(images, null, 2));

            if (typeof successFn === 'function') {
                successFn(images[0]['url']);
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
    getSchedule
};