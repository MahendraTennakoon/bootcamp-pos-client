import { ADD_ORDER, ORDERS_FETCHED, SERVER_ERROR, ITEMS_FETCHED } from '../constants/actionTypes';
const axios = require('axios');

export const addOrder = (payload) => {
    return {
        type: ADD_ORDER,
        payload
    };
};

export const fetchOrders = () => {
    return function (dispatch) {
        axios.get('http://localhost:8080/orders')
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