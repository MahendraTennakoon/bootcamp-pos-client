import { ADD_ORDER, ORDERS_FETCHED, SERVER_ERROR, ITEMS_FETCHED ,CREATE_ORDER_SUCCESS, CREATE_ORDER_ERROR, RESET_CREATED_ORDER_ID } from '../constants/actionTypes';
const axios = require('axios');

export const addOrder = (payload) => {
    return {
        type: ADD_ORDER,
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
        axios.get('http://localhost:8080/orders', {headers: {'X-Custom-Header': 'foobar'}})
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