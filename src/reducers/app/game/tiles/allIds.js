import {START_NEW_GAME} from '../../../../actions/types';

export default (state = [], action) => (
    action.type === START_NEW_GAME ? action.payload.normalizedTiles.result : state
);
