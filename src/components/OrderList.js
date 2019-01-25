import React, { Component } from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import Order from './Order';
import { Message, Button, Icon } from 'semantic-ui-react';
const axios = require('axios');

class OrderList extends Component {
    state = {
        orders: [],
        error: undefined
      };
      componentDidMount () {
        axios.get('http://localhost:8080/orders')
          .then((response) => {
            if (response.data.length > 0) {
              this.setState(() => ({ orders: response.data, error: undefined }));
            } else {
              this.setState(() => ({ error: 'There are no open orders!' }));
            }
          })
          .catch((error) => {
            console.log(error);
            this.setState(() => ({ error: 'Error contacting server!' }));
          });
      };
    render() {
        return (
            <div>
                <Header as='h1' block color="blue">
                    Orders
                </Header>
                <Segment attached>
                    {
                        this.state.error &&
                        <Message negative>
                            <Message.Header>{this.state.error}</Message.Header>
                        </Message>
                    }
                    {
                        this.state.orders.length > 0 &&
                        <List divided relaxed>
                            {this.state.orders.map((order) => <Order key={order.order_id} order={order} />)}
                        </List>
                    }
                </Segment>
                <Segment attached='bottom' clearing>
                    <Message compact info>
                        Total Open Orders: <strong>{this.state.orders.length}</strong>
                    </Message>
                    <Button secondary icon labelPosition='left' floated="right">
                        <Icon name='cart plus' />
                        Create Order
                    </Button>
                </Segment>
            </div>
        );
    }
};

export default OrderList;