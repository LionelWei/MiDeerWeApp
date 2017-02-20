var bmob = require('./bmob/bmob.js');

function getCourses(successFn, errFn) {
    var query = new bmob.Query(bmob.Object.extend("courses"));
    query.ascending('order');
    // 查询所有数据
    query.find({
        success: function (results) {
            var courses = results.map((e, i) => {
                return {
                    courseId: e.get('courseId'),
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
            successFn(courses);
        },
        error: function (error) {
            console.log("查询失败: " + error.code + " " + error.message);
            if (typeof errFn === 'Function') {
                errFn({code: error.code, message: error.message});
            }
        }
    });
}

function getCourseResource(courseId, successFn, errFn) {
    var query = new bmob.Query(bmob.Object.extend("courseRes")).equalTo('courseId', courseId).ascending('order');
    query.find({
        success: (result) => {
            var images = result.map((e, i) => {
                return e.get('imageUrl')._url;
            })
            successFn(images); 
        },
        error: (error) => {
            errFn({code: error.code, message: error.message});
        }
    })
    
    
}

module.exports = {
    getCourses,
    getCourseResource
};
