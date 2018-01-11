const initialState = {
    data: 43
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                data: state.data + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                data: state.data - 1
            };
        case 'RESET':
            return {
                ...state,
                data: 0
            };
        case 'USE_REDUX_WHEN':
            return {
                ...state,
                data: 'data is resetted with redux-when, thunk is used'
            }
        default:
            return state;
    }
};

export default testReducer;
