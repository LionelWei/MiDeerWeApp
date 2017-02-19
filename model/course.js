var bmob = require('./bmob/bmob.js');

function getCourses(successFn, errFn) {
    var query = new bmob.Query(bmob.Object.extend("courses"));
    var that = this;
    // 查询所有数据
    query.find({
        success: function (results) {
            var courses = results.map((e, i) => {
                return {
                    courseType: e.get('courseType'),
                    courseNum: e.get('courseNum'),
                    courseName: e.get('courseName'),
                    ageRange: e.get('ageRange'),
                    icon: e.get('courseFirstImage')._url,
                    feature: e.get('feature'),
                    teachSubject: e.get('teachSubject'),
                    courseOutline: e.get('courseOutline'),
                    lessonTime: e.get('lessonTime'),
                    courseNumDesc: e.get('courseNumDescription'),
                }
            });

            if (typeof successFn === 'function') {
                successFn(courses);
            }
        },
        error: function (error) {
            console.log("查询失败: " + error.code + " " + error.message);
            if (typeof errFn === 'Function') {
                errFn({code: error.code, message: error.message});
            }
        }
    });
}

module.exports = {
    getCourses
};
