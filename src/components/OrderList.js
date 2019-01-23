import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import Order from './Order';

const OrderList = (props) => {
    return (
        <div>
            <Header as='h1' block color="blue">
                Orders
            </Header>
            <Segment>
                <List divided relaxed>
                    <Order id={1} date={ '2019-01-23' } />
                    <Order id={1} date={ '2019-01-23' } />
                    <Order id={1} date={ '2019-01-23' } />
                </List>
            </Segment>
        </div>
    );
};

export default OrderList;