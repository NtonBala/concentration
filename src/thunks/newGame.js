import {startNewGame} from '../actions';
import getTiles from '../helpers/getTiles';
import v4 from 'uuid/v4';

const newGame = () => {
    return (dispatch) => {
        //get unique game id
        const id = v4();
        //get formed and shuffled array of tiles
        const tiles = getTiles();

        const payload = {
            id,
            tiles
        };

        dispatch(startNewGame(payload));
    };
};

export default newGame;
