import {roundPassed, roundFailed} from '../actions/game';

const endRound = () => (
    (dispatch, getState) => {
        setTimeout(() => {
            const state = getState();
            const tiles = state.app.game.round.tiles;

            tiles[0].pairId === tiles[1].pairId ?
                dispatch(roundPassed({tiles})) :
                dispatch(roundFailed());
        }, 3000);
    }
);

export default endRound;
