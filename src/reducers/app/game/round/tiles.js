import {START_NEW_GAME, FLIPP_TILE, ROUND_PASSED, ROUND_FAILED} from '../../../../actions/types';

const initialState = [];

const tiles = (state = initialState, action) => {
    switch (action.type) {
        case START_NEW_GAME:
        case ROUND_PASSED:
        case ROUND_FAILED:
            return initialState;
        case FLIPP_TILE:
            return [
                ...state,
                action.payload.roundTile
            ];
        default:
            return state;
    }
};

export default tiles;
