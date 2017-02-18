var bmob = require('../bmob/bmob.js');

function getTeachers(successFn, errFn) {
    var query = new bmob.Query(bmob.Object.extend("res"));
    // 查询所有数据
    query.equalTo('showAt', 'teacher').equalTo('source', 'home');
    query.find({
        success: results => {
            var images = results.map((e, i) => {
                return {
                    url: e.get('url')._url,
                    id: i,
                    name: e.get('name'),
                    description: e.get('description'),
                }
            })
            
            console.log('teachers: ' + JSON.stringify(images, null, 2));

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
    getTeachers
};