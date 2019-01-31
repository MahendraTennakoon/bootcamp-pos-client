import React, { Component } from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import Order from './Order';
import { Message, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addOrder, fetchOrders, createOrder, resetCreatedOrderId } from '../actions/index';

class OrderList extends Component {
    state = {
        error: undefined
    };
    componentDidUpdate() {
        if(this.props.created_order_id) {
            this.props.history.push(`/orders/${this.props.created_order_id}`);
            this.props.resetCreatedOrderId();
        }
    }
    componentDidMount() {
        this.props.fetchOrders();
    };
    createOrder = () => {
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        var today = new Date();
        const order = {
            created_date: today.toLocaleDateString("en-US", options)
        }
        this.props.createOrder(order);
    };
    render() {
        return (
            <div>
                <Header as='h1' block color="blue">
                    Orders
                </Header>
                <Segment attached>
                    {
                        this.props.server_error &&
                        <Message negative>
                            <Message.Header>{this.props.server_error}</Message.Header>
                        </Message>
                    }
                    {
                        this.props.orders && this.props.orders.length > 0 &&
                        <List divided relaxed>
                            {this.props.orders.map((order) => <Order key={order.order_id} order={order} />)}
                        </List>
                    }
                </Segment>
                <Segment attached='bottom' clearing>
                    <Message compact info>
                        Total Open Orders: <strong>{this.props.orders.length}</strong>
                    </Message>
                    <Button
                        secondary
                        icon
                        labelPosition='left'
                        floated="right"
                        onClick={this.createOrder}
                    >
                        <Icon name='cart plus' />
                        Create Order
                    </Button>
                </Segment>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        orders: state.orders,
        server_error: state.server_error,
        created_order_id: state.created_order_id
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: order => dispatch(addOrder(order)),
        fetchOrders: () => dispatch(fetchOrders()),
        createOrder: (order) => dispatch(createOrder(order)),
        resetCreatedOrderId: () => dispatch(resetCreatedOrderId())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);