import {assign} from 'lodash/object';

const initialState = {
    isPlayed: false,
    game: {
        isPaused: false,
        tiles: []
    }
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'START_NEW_GAME':
            return assign({}, initialState, {
                isPlayed: true,
                game: assign({}, initialState.game, {
                    id: action.payload.id,
                    tiles: action.payload.tiles
                })
            });
        case 'TOGGLE_PAUSE':
            return assign({}, state, {
                game: {
                    ...state.game,
                    isPaused: !state.game.isPaused
                }
            });
        default:
            return state;
    }
};

export default app;
