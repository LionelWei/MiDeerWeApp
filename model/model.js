import { getCourses } from './course'
import { getBannerImages } from './banner'
import { getTeachers } from './teacher'
import { getSchedule } from './courseSchedule'
var bmob = require('./bmob/bmob.js');

const DEFAULT_BANNER_IMAGE = [{ id: 0, url: '/image/mideer-logo.jpg' }]

var CONSTANT = {
    DEFAULT_BANNER_IMAGE: DEFAULT_BANNER_IMAGE
};

function init() {
    bmob.initialize("21c320c8e99d2c7de378f55a519dde77", "df80f963795fca9dcdf70ac28449f70e");
}

var model = {
    getCourses: getCourses,
    getBannerImages: getBannerImages,
    getTeachers: getTeachers,
    getSchedule: getSchedule,
    init: init,
    CONSTANT: CONSTANT,
}

module.exports = model;