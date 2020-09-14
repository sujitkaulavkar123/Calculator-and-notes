import { combineReducers } from 'redux';
import mathReducer from './mathReducer';
import notesReducer from './notesReducer';

const reducers = combineReducers({
    mathReducer,
    notesReducer
});

export default reducers;
