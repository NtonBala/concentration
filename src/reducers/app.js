import {assign} from 'lodash/object';

const initialState = {
    isPlayed: false,
    game: {
        isPaused: false,
        tiles: {
            byId: {},
            allIds: []
        },
        round: {
            number: 1,
            tiles: []
        }
    }
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'START_NEW_GAME':
            return assign({}, initialState, {
                isPlayed: true,
                game: assign({}, initialState.game, {
                    id: action.payload.id,
                    tiles: {
                        byId: action.payload.normalizedTiles.entities.tiles,
                        allIds: action.payload.normalizedTiles.result
                    }
                })
            });
        case 'TOGGLE_PAUSE':
            return assign({}, state, {
                game: {
                    ...state.game,
                    isPaused: !state.game.isPaused
                }
            });
        case 'FLIPP_TILE':
            return assign({}, state, {
                game: assign({}, state.game, {
                    round: assign({}, state.game.round, {
                        tiles: [
                            ...state.game.round.tiles,
                            action.payload
                        ]
                    })
                })
            });
        case 'ROUND_PASSED':
            return assign({}, state, {
                game: assign({}, state.game, {
                    tiles: assign({}, state.game.tiles, {
                        byId: assign({}, state.game.tiles.byId, {
                            [action.payload.tiles[0].id]: assign({},
                                state.game.tiles.byId[action.payload.tiles[0].id],
                                {
                                    removed: true
                                }
                            ),
                            [action.payload.tiles[1].id]: assign({},
                                state.game.tiles.byId[action.payload.tiles[1].id],
                                {
                                    removed: true
                                }
                            )
                        })
                    }),
                    round: assign({}, initialState.game.round, {
                        number: state.game.round.number + 1
                    })
                })
            });
        case 'ROUND_FAILED':
            return assign({}, state, {
                game: assign({}, state.game, {
                    round: assign({}, initialState.game.round, {
                        number: state.game.round.number + 1
                    })
                })
            });
        default:
            return state;
    }
};

export default app;
