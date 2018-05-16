import * as types from './actionTypes';

export function loadAuthorsActions() {
    return {
        type: types.LOAD_AUTHORS
    }
}

export function loadAuthorsSuccessAction(authors) {
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
    }
}