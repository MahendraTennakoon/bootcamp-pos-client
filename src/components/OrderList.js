import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import Order from './Order';
import { Message, Button, Icon } from 'semantic-ui-react';

const OrderList = (props) => {
    return (
        <div>
            <Header as='h1' block color="blue">
                Orders
            </Header>
            <Segment attached>
                {
                    props.error &&
                    <Message negative>
                        <Message.Header>{props.error}</Message.Header>
                    </Message>
                }
                {
                    props.orders.length > 0 &&
                    <List divided relaxed>
                        {props.orders.map((order) => <Order key={order.order_id} id={order.order_id} date={order.created_date} />)}
                    </List>
                }
            </Segment>
            <Segment attached='bottom' clearing>
                <Message>
                    <Message.Header>Total open orders: { props.orders.length }</Message.Header>
                </Message>
                <Button secondary icon labelPosition='left' floated="right">
                    <Icon name='cart plus' />
                    Create Order
                </Button>
            </Segment>
        </div>
    );
};

export default OrderList;