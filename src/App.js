import React from 'react';
import PropTypes from 'prop-types';
import './css/index.css';
import Main from './components/Main';
import Board from './components/Board';
import Options from './components/Options';

/*import Tile from './components/Tile';
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
        this.flip = this.flip.bind(this);
    }
    flip() {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
    }
    render() {
        return (<div>
            <Tile opened={this.state.opened} flip={this.flip}/>
        </div>);
    }
}*/

const App = ({isPlayed, isPaused, newGame, togglePause}) => {
    let button = null;
    if (isPlayed) {
        button = isPaused ?
            <button onClick={togglePause}>Continue</button> :
            <button onClick={togglePause}>Rules</button>;
    }

    return (
        <div className='App'>
            {!isPlayed ? <Main/> : !isPaused ? <Board/> : <Main/>}
            <Options newGame={newGame}>{button}</Options>
        </div>
    );
};

App.propTypes = {
    isPlayed: PropTypes.bool.isRequired,
    isPaused: PropTypes.bool.isRequired,
    newGame: Options.propTypes.newGame,
    togglePause: PropTypes.func
};

export default App;
