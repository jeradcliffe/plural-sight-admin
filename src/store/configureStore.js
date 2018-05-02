import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        // check out slingshot on Cory House github for ex of how to set up middleware for Redux store tools on chrome
        // applyMiddleware(reduxImmutableStateInvariant)
    );
}