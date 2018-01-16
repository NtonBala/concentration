import {roundPassed, roundFailed} from '../actions/game';

const endRound = () => (
    (dispatch, getState) => {
        setTimeout(() => {
            const state = getState();
            const roundTiles = state.app.game.round.tiles;

            if (roundTiles[0].pairId === roundTiles[1].pairId) {
                dispatch(roundPassed({roundTiles}));
            } else {
                dispatch(roundFailed());
            }
        }, 3000);
    }
);

export default endRound;
