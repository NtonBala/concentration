import {combineReducers} from 'redux';
import number from './round/number';
import tiles from './round/tiles';

export default combineReducers({
    number,
    tiles
});
