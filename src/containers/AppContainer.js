import {connect} from 'react-redux';
import App from '../App';
import newGame from '../thunks/newGame';
import {togglePause} from '../actions/game';

const mapProps = state => ({
    isPlayed: state.app.isPlayed,
    isPaused: state.app.game.isPaused,
    tiles: state.app.game.tiles.allIds,
    round: state.app.game.round.number
});

const dispatchProps = dispatch => ({
    newGame: () => dispatch(newGame()),
    togglePause: () => dispatch(togglePause())
});

export default connect(mapProps, dispatchProps)(App);
