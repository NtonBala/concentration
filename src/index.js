import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {when} from 'redux-when';

const root = document.getElementById('root');

const store = configureStore();
/*
store.dispatch(when(
    state => state.test.data === 0,
    () => {
        return dispatch => {
            dispatch({type: 'USE_REDUX_WHEN'});
        };
    }
));
*/

const render = () => {
    const App = require('./containers/AppContainer').default;

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        root
    );
};

if (module.hot) {
    module.hot.accept('./containers/AppContainer', () => {
        setTimeout(render);
    });
}

render();
