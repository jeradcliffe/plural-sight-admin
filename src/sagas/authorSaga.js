import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "../actions/actionTypes";
import AuthorApi from "../api/mockAuthorApi";

export function* watchLoadAuthors() {
    yield takeEvery(types.LOAD_AUTHORS, loadAuthors)
}

function* loadAuthors() {
    try {
        const authors = yield call(AuthorApi.getAllAuthors);
        yield put({type: types.LOAD_AUTHORS_SUCCESS, authors})
    } catch (e) {
        console.log(e.type, e.message)
    }

}
