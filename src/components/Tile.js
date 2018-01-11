import React from 'react';
import PropTypes from 'prop-types';

const Front = () => (
    <div className='front tile'>Opened</div>
);

const Back = () => (
    <div className='back tile'>Closed</div>
);

const Tile = ({opened, onClick}) => (
    <div className='tile-container' onClick={onClick}>
        <div className={'tile' + (opened ? ' opened' : '')}>
            <Front>Opened</Front>
            <Back>Closed</Back>
        </div>
    </div>
);

Tile.propTypes = {
    opened: PropTypes.bool
};

export default Tile;
