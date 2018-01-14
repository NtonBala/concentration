import React from 'react';
import PropTypes from 'prop-types';

const Front = () => (
    <div className='front tile'>Opened</div>
);

const Back = () => (
    <div className='back tile'>Closed</div>
);

const Tile = ({opened, flip}) => (
    <div className='tile-container' onClick={flip}>
        <div className={'tile' + (opened ? ' opened' : '')}>
            <Front>Opened</Front>
            <Back>Closed</Back>
        </div>
    </div>
);

Tile.propTypes = {
    opened: PropTypes.bool.isRequired,
    flip: PropTypes.func.isRequired
};

export default Tile;
