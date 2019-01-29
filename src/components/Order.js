import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";


const Order = (props) => {
    return (
        <List.Item>
            <List.Content floated='right'>
                <Link to={`/order/${props.order.order_id}`}>
                    <Button icon labelPosition='left'>
                        <Icon name='in cart' />
                        Details
                    </Button>
                </Link>
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