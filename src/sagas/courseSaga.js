import * as types from '../actions/actionTypes';
import CourseApi from "../api/mockCourseApi";
import {call, put, takeEvery} from "redux-saga/effects";
import {loadCourseSuccessAction, saveCourseSuccessAction, updateCourseSuccessAction} from "../actions/courseActions";

export function* watchSaveCourse() {
    yield takeEvery(types.SAVE_COURSE, saveCourse)
}

function* saveCourse(action) {
    try {
        yield call(CourseApi.saveCourse, action.course);

        action.course.id ?
            yield put(updateCourseSuccessAction(action.course)) :
            yield put(saveCourseSuccessAction(action.course))
    } catch (e) {
        console.log(e.type, e.message);
    }
}

export function* watchLoadCourses() {
    yield takeEvery(types.LOAD_COURSES, loadCourses);
}

function* loadCourses() {
    try {
        const courses = yield call(CourseApi.getAllCourses);
        yield put(loadCourseSuccessAction(courses));
} catch (e) {
        console.log(e.type, e.message);
    }
}
