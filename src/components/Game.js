import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/collection';
import TileContainer from '../containers/TileContainer';

const Game = ({round, tiles}) => (
    <div>
        <h2>Round {round}</h2>
        <ul className='board'>
            {map(tiles, id => (
                <TileContainer
                    key={id}
                    id={id}
                />
            ))}
        </ul>
    </div>
);

Game.propTypes = {
    round: PropTypes.number,
    tiles: PropTypes.arrayOf(PropTypes.string)
};

export default Game;
