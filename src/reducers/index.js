import { 
    ADD_ORDER, 
    ORDERS_FETCHED, 
    SERVER_ERROR, 
    ITEMS_FETCHED, 
    CREATE_ORDER_ERROR, 
    CREATE_ORDER_SUCCESS, 
    RESET_CREATED_ORDER_ID,
    FETCH_ORDER_ITEMS_SUCCESS,
    FETCH_ORDER_ITEMS_ERROR, 
    SET_ITEM_QUANTITY,
    ADD_ORDER_ITEMS
} from '../constants/actionTypes';
import update from 'immutability-helper';

const initialState = {
    orders: [],
    items: [],
    order_items: [],
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
        case FETCH_ORDER_ITEMS_SUCCESS:
            return {
                ...state,
                order_items: [...action.payload]
            }
        case FETCH_ORDER_ITEMS_ERROR:
            return {
                ...state,
                server_error: 'Error fetching items in order!'       
            }
        case SET_ITEM_QUANTITY:
            const index = state.order_items.findIndex(item => item.id === action.payload.item_id);
            return {
                ...state,
                order_items: update(state.order_items, { [index]: { quantity: { $set: action.payload.quantity }, isEditing: { $set: action.payload.edit_status } } })
            }
        case ADD_ORDER_ITEMS:
            return {
                ...state,
                order_items: [...state.order_items, ...action.payload]
            }
        default:
            return state;
    }
};

export default rootReducer;