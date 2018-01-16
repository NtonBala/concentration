import {START_NEW_GAME} from '../../actions/types';

const isPlayed = (state = false, action) => (
    action.type === START_NEW_GAME ? true : state
);

export default isPlayed;
