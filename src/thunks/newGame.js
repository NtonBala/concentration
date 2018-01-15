import {startNewGame} from '../actions';
import getTiles from '../helpers/getTiles';
import v4 from 'uuid/v4';
import {arrayOfTiles} from '../helpers/normalizr/schema';
import {normalize} from 'normalizr';

const newGame = () => (
    dispatch => {
        //get unique game id
        const id = v4();

        //get formed and shuffled array of tiles
        const tiles = getTiles();

        //normalize tiles with normalizr
        const normalizedTiles = normalize(tiles, arrayOfTiles);

        const payload = {
            id,
            normalizedTiles
        };

        dispatch(startNewGame(payload));
    }
);

export default newGame;
