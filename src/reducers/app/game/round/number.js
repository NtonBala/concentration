import {START_NEW_GAME, ROUND_PASSED, ROUND_FAILED} from '../../../../actions/types';

const initialState = 1;

const number = (state = initialState, action) => {
    switch (action.type) {
        case START_NEW_GAME:
            return initialState;
        case ROUND_PASSED:
        case ROUND_FAILED:
            return state + 1;
        default:
            return state;
    }
};

export default number;
