import React from 'react';
import { Button, Icon, Modal, Header } from 'semantic-ui-react';
import Items from './Items';

const OrderDetails = (props) => {
    return (
        <Modal trigger={
            <Button icon labelPosition='left'>
                <Icon name='in cart' />
                Details
            </Button>
        }>
            <Modal.Header>Order Details</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Order ID: {props.order.order_id}</Header>
                    <p>Created Date: {props.order.created_date}</p>
                </Modal.Description>
                <Items order_id={props.order.order_id} />
            </Modal.Content>
        </Modal>
    );
};

export default OrderDetails;