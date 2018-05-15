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