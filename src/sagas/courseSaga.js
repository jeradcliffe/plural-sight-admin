import * as types from '../actions/actionTypes';
import CourseApi from "../api/mockCourseApi";
import {call, put, takeEvery} from "redux-saga/effects";

export function* watchSaveCourse() {
    yield takeEvery(types.SAVE_COURSE, saveCourse)
}

function* saveCourse(action) {
    try {
        yield call(CourseApi.saveCourse, action.course);
        action.course.id ?
            yield put({type: types.UPDATE_COURSES_SUCCESS, course: action.course}) :
            yield put({type: types.SAVE_COURSE_SUCCESS, course: action.course})
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
        yield put({type: types.LOAD_COURSES_SUCCESS, courses});
    } catch (e) {
        console.log(e.type, e.message);
    }
}
