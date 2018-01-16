import {START_NEW_GAME, ROUND_PASSED} from '../../../../actions/types';
import updateObj from '../../../utilities/updateObj';

//extract case reducers
const roundPassed = (state, action) => {
    const [roundTile1, roundTile2] = action.payload.roundTiles;

    return updateObj(state, {
        [roundTile1.id]: updateObj(state[roundTile1.id], {
            removed: true
        }),
        [roundTile2.id]: updateObj(state[roundTile2.id], {
            removed: true
        })
    });
};

export default (state = {}, action) => {
    switch (action.type) {
        case START_NEW_GAME:
            return action.payload.normalizedTiles.entities.tiles;
        case ROUND_PASSED:
            return roundPassed(state, action);
        default:
            return state;
    }
};
