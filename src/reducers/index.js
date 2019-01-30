import { ADD_ORDER, ORDERS_FETCHED, SERVER_ERROR } from '../constants/actionTypes';

const initialState = {
    orders: [],
    server_error: undefined
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,  
                orders: [...state.orders, action.payload]
            }
        case ORDERS_FETCHED:
            return {
                ...state,  
                orders: [...action.payload],
                server_error: undefined
            }
        case SERVER_ERROR:
            return {
                orders: [],
                server_error: 'Error contacting server!' 
            }
        default:
            return state;
    }
};

export default rootReducer;