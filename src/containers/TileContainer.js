import {connect} from 'react-redux';
import Tile from '../components/Tile';
import {findIndex} from 'lodash/array';
import {flippTile} from '../actions/game';
import {pick} from 'lodash/object';

const mapState = (state, ownProps) => ({
    tile: state.app.game.tiles.byId[ownProps.id],
    color: state.app.game.tiles.byId[ownProps.id].color,
    opened: findIndex(state.app.game.round.tiles,
        tile => tile.id === ownProps.id) !== -1,
    unclickable: state.app.game.tiles.byId[ownProps.id].removed ||
        state.app.game.round.tiles.length >= 2 ||
        findIndex(state.app.game.round.tiles,
            tile => tile.id === ownProps.id) !== -1,
    removed: state.app.game.tiles.byId[ownProps.id].removed
});

const mapDispatch = (dispatch) => ({
    flip: (payload) => dispatch(flippTile({roundTile: payload}))
});

const mergeProps = (stateProps, dispatchProps) => ({
    color: stateProps.color,
    opened: stateProps.opened,
    unclickable: stateProps.unclickable,
    removed: stateProps.removed,
    flip: () => dispatchProps.flip(pick(stateProps.tile, ['id', 'pairId']))
});

export default connect(mapState, mapDispatch, mergeProps)(Tile);
