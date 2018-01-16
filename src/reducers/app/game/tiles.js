import {combineReducers} from 'redux';
import byId from './tiles/byId';
import allIds from './tiles/allIds';

const tiles = combineReducers({
    byId,
    allIds
});

export default tiles;
