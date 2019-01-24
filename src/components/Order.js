import React from 'react';
import { List } from 'semantic-ui-react';
import OrderDetails from './OrderDetails';


const Order = (props) => {
    return (
        <List.Item>
            <List.Content floated='right'>
                <OrderDetails order={props.order} />
            </List.Content>
            <List.Icon name='shopping cart' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header>Order ID: {props.order.order_id}</List.Header>
                <List.Description>Date: {props.order.created_date}</List.Description>
            </List.Content>
        </List.Item>
    );
};

export default Order;