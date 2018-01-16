import {combineReducers} from 'redux';
import app from './app';

//use app reducer to distinguish app slice of state (app data) from possible UI and domain data
const rootReducer = combineReducers({
    app
});

export default rootReducer;
