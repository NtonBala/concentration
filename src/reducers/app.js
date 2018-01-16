import {combineReducers} from 'redux';
import isPlayed from './app/isPlayed';
import game from './app/game';

//app reducer manages only slices of state responsible for app state
export default combineReducers({
    isPlayed,
    game
});
