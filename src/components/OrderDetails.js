import React, { Component } from 'react';
import { Segment, Header, Label, Breadcrumb } from 'semantic-ui-react';
import Items from './Items';
import { Link } from "react-router-dom";


class OrderDetails extends Component {
    render() {
        return (
            <div>
                <Header as='h1' block color="blue">
                    <Breadcrumb size="massive">
                        <Breadcrumb.Section link>
                            <Link to={'/orders'}>Orders</Link>
                        </Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right angle' />
                        <Breadcrumb.Section link>Order Details</Breadcrumb.Section>
                    </Breadcrumb>
                </Header>
                <Segment attached>
                    <Label attached='top'>ORDER ID: {this.props.match.params.order_id}</Label>
                    <Items order_id={this.props.match.params.order_id} />
                </Segment>
            </div>
        );
    };
}

export default OrderDetails;