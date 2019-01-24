import React from 'react';
import { Button, Icon, Modal, Image, Header } from 'semantic-ui-react';

const OrderDetails = (props) => {
    return (
        <Modal trigger={
            <Button icon labelPosition='left'>
                <Icon name='in cart' />
                Details
            </Button>
        }>
            <Modal.Header>Order Details</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Header>Order ID: { props.order.order_id }</Header>
                    <p>Created Date: { props.order.created_date }</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};

export default OrderDetails;