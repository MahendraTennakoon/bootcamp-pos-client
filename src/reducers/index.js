import { ADD_ORDER, ORDERS_FETCHED, SERVER_ERROR, ITEMS_FETCHED, CREATE_ORDER_ERROR, CREATE_ORDER_SUCCESS, RESET_CREATED_ORDER_ID } from '../constants/actionTypes';

const initialState = {
    orders: [],
    items: [],
    server_error: undefined,
    created_order_id: undefined
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
        case ITEMS_FETCHED:
            return {
                ...state,
                items: [...action.payload],
                server_error: undefined
            }
        case SERVER_ERROR:
            return {
                orders: [],
                server_error: 'Error contacting server!'
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                created_order_id: action.payload.order_id
            }
        case CREATE_ORDER_ERROR:
            return {
                ...state,
                server_error: 'Error creating order!'
            }
        case RESET_CREATED_ORDER_ID:
            return {
                ...state,
                created_order_id: undefined
            }
        default:
            return state;
    }
};

export default rootReducer;