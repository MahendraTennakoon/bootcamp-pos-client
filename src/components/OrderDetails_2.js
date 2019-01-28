import React, { Component } from 'react';
import { Segment, Header, Label, Message } from 'semantic-ui-react';
import Items from './Items';

class OrderDetails_2 extends Component {
    render() {
        return (
            <div>
                <Header as='h1' block color="blue">
                    Order Details
                </Header>
                <Segment attached>
                    <Label attached='top'>ORDER ID: {this.props.match.params.order_id}</Label>
                    <Items order_id={this.props.match.params.order_id} />
                </Segment>
            </div>
        );
    };
}

export default OrderDetails_2;