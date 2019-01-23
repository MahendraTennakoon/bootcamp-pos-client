import React from 'react';
import { List } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const Order = (props) => {
    return (
        <List.Item>
            <List.Content floated='right'>
                <Button icon labelPosition='left'>
                    <Icon name='content' />
                    Details
                </Button>
            </List.Content>
            <List.Icon name='shopping cart' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header>Order ID: { props.id }</List.Header>
                <List.Description>Date: { props.date }</List.Description>
            </List.Content>
        </List.Item>
    );
};

export default Order;