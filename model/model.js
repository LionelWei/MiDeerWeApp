import { getCourses, getCourseResource } from './course'
import { getBannerImages } from './banner'
import { getTeachers } from './teacher'
import { getSchedule } from './courseSchedule'
var bmob = require('./bmob/bmob.js');

const DEFAULT_BANNER_IMAGE = ['/image/mideer-logo.jpg'];

function init() {
    bmob.initialize("21c320c8e99d2c7de378f55a519dde77", "df80f963795fca9dcdf70ac28449f70e");
}

var model = {
    getCourses,
    getBannerImages,
    getTeachers,
    getSchedule,
    getCourseResource,
    init,
    DEFAULT_BANNER_IMAGE,
}

module.exports = model;