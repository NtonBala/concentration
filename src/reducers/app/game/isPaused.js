import {START_NEW_GAME, TOGGLE_PAUSE} from '../../../actions/types';

const initialState = false;

const isPaused = (state = initialState, action) => {
    switch (action.type) {
        case START_NEW_GAME:
            return initialState;
        case TOGGLE_PAUSE:
            return !state;
        default:
            return state;
    }
};

export default isPaused;
