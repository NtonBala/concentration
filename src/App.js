import React from 'react';
import PropTypes from 'prop-types';
import './css/index.css';
import Main from './components/Main';
import Game from './components/Game';
import Options from './components/Options';

const App = ({isPlayed, isPaused, newGame, togglePause, tiles, round}) => {
    let button = null;
    if (isPlayed) {
        button = isPaused ?
            <button onClick={togglePause}>Continue</button> :
            <button onClick={togglePause}>Rules</button>;
    }

    return (
        <div className='App'>
            {!isPlayed ? <Main/> :
                !isPaused ? <Game tiles={tiles} round={round}/> : <Main/>}
            <Options newGame={newGame}>{button}</Options>
        </div>
    );
};

App.propTypes = {
    isPlayed: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    newGame: Options.propTypes.newGame,
    togglePause: PropTypes.func,
    tiles: Game.propTypes.tiles,
    round: Game.propTypes.round
};

export default App;
