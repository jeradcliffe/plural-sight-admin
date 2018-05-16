import * as types from './actionTypes';

export function saveCourseAction(course) {
    return {
        type: types.SAVE_COURSE,
        course
    };
}

export function loadCoursesAction() {
    return {
        type: types.LOAD_COURSES
    }
}

export function loadCourseSuccessAction(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}

export function updateCourseSuccessAction(course) {
    return {
        type: types.UPDATE_COURSES_SUCCESS,
        course
    }
}

export function saveCourseSuccessAction(course) {
    return {
        type: types.SAVE_COURSE_SUCCESS,
        course
    }
}
