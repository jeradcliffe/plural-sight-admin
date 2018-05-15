import {watchLoadCourses, watchSaveCourse} from "./courseSaga";
import {watchLoadAuthors} from './authorSaga';
import {fork, all} from "redux-saga/effects";

export default function* rootSaga() {
    all([
        yield fork(watchLoadAuthors),
        yield fork(watchLoadCourses),
        yield fork(watchSaveCourse)
    ]);
}
