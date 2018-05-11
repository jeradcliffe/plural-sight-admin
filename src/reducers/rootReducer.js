import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const RootReducer = combineReducers({
    courses,
    authors
});

export default RootReducer;