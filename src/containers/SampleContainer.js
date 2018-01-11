import React from 'react';
import {connect} from 'react-redux';

const mapState = state => ({
    data: state.test.data
});

const incrAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: 'INCREMENT'})
        }, 1000);
    };
};

const actionsState = dispatch => ({
    increment: () => {dispatch(incrAsync());},
    decrement: () => {
        dispatch({type: 'DECREMENT'});
    },
    reset: () => {dispatch({type: 'RESET'});}
});

const SampleContainer = ({data, increment, decrement, reset}) => {
    return (
        <div>
            <h1>Data from Redux: {data}</h1>
            <button onClick={(e) => {increment(e);}}>
                Increment with thunk
            </button>
            <button onClick={(e) => {decrement(e);}}>
                Decrement
            </button>
            <button onClick={(e) => {reset(e);}}>
                Reset with redux-when
            </button>
        </div>
    );
};

export default connect(mapState, actionsState)(SampleContainer);
