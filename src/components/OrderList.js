import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import Order from './Order';
import { Message } from 'semantic-ui-react';

const OrderList = (props) => {
    return (
        <div>
            <Header as='h1' block color="blue">
                Orders
            </Header>
            <Segment>
                {
                    props.error ? 
                    <Message negative>
                        <Message.Header>{props.error}</Message.Header>
                    </Message> : props.orders.length === 0 && 
                    <Message negative>
                        <Message.Header>There are no open orders.</Message.Header>
                    </Message>
                }
                {
                    props.orders.length > 0 &&
                    <List divided relaxed>
                        {props.orders.map((order) => <Order key={order.order_id} id={order.order_id} date={order.created_date} />)}
                    </List>
                }
            </Segment>
        </div>
    );
};

export default OrderList;