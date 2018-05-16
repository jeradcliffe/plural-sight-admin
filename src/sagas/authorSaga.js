import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "../actions/actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import {loadAuthorsSuccessAction} from "../actions/authorActions";

export function* watchLoadAuthors() {
    yield takeEvery(types.LOAD_AUTHORS, loadAuthors)
}

function* loadAuthors() {
    try {
        const authors = yield call(AuthorApi.getAllAuthors);
        yield put(loadAuthorsSuccessAction(authors))
    } catch (e) {
        console.log(e.type, e.message)
    }

}
