import {
    ADD_ORDER,
    ORDERS_FETCHED,
    SERVER_ERROR,
    ITEMS_FETCHED,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
    RESET_CREATED_ORDER_ID,
    FETCH_ORDER_ITEMS_SUCCESS,
    FETCH_ORDER_ITEMS_ERROR,
    SET_ITEM_QUANTITY,
    ADD_ORDER_ITEMS,
    REMOVE_ORDER_ITEM_ERROR
} from '../constants/actionTypes';
const axios = require('axios');

export const addOrder = (payload) => {
    return {
        type: ADD_ORDER,
        payload
    };
};

export const addOrderItems = (payload) => {
    return {
        type: ADD_ORDER_ITEMS,
        payload
    }
};

export const removeOrderItem = (order_id, item_id) => {
    return function (dispatch) {
        axios
            .delete(`http://localhost:8080/orders/${order_id}/${item_id}`)
            .then(() => {
                dispatch(fetchOrderItems(order_id));
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: REMOVE_ORDER_ITEM_ERROR })
            });
    }
};

export const setItemQuantity = (payload) => {
    return {
        type: SET_ITEM_QUANTITY,
        payload
    };
};

export const resetCreatedOrderId = () => {
    return {
        type: RESET_CREATED_ORDER_ID
    }
}

export const fetchOrders = () => {
    return function (dispatch) {
        axios.get('http://localhost:8080/orders', { headers: { 'X-Custom-Header': 'foobar' } })
            .then((response) => {
                dispatch({ type: ORDERS_FETCHED, payload: response.data });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: SERVER_ERROR })
            });
    }
};

export const fetchItems = () => {
    return function (dispatch) {
        axios.get('http://localhost:8080/items')
            .then((response) => {
                dispatch({ type: ITEMS_FETCHED, payload: response.data });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: SERVER_ERROR })
            });
    }
};

export const createOrder = (order) => {
    return function (dispatch) {
        axios.post('http://localhost:8080/orders', order)
            .then((response) => {
                dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: CREATE_ORDER_ERROR })
            });
    }
};

export const fetchOrderItems = (order_id) => {
    return function (dispatch) {
        axios.get(`http://localhost:8080/orders/${order_id}`)
            .then((response) => {
                dispatch({ type: FETCH_ORDER_ITEMS_SUCCESS, payload: response.data });
            })
            .catch((error) => {
                dispatch({ type: FETCH_ORDER_ITEMS_ERROR });
            });
    }
};