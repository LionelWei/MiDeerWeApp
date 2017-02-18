import {getCourses} from './course'
import {getBannerImages} from './banner'
import {getTeachers} from './teacher'
import {getSchedule} from './courseSchedule'

const DEFAULT_BANNER_IMAGE=[{id: 0, url: '/image/mideer-logo.jpg'}]

var CONSTANT = {
    DEFAULT_BANNER_IMAGE: DEFAULT_BANNER_IMAGE
};

var model = {
    getCourses: getCourses,
    getBannerImages: getBannerImages,
    getTeachers: getTeachers,
    getSchedule: getSchedule,
    CONSTANT: CONSTANT,
}

module.exports = model;