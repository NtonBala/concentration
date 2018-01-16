import {combineReducers} from 'redux';
import isPaused from './game/isPaused';
import tiles from './game/tiles';
import round from './game/round';

const game = combineReducers({
    isPaused,
    tiles,
    round
});

export default game;
