import React from 'react';
import { List } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const OrderList = (props) => {
    return (
        <div>
            <Segment>
                <List divided relaxed>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button icon labelPosition='left'>
                                <Icon name='content' />
                                Details
                            </Button>
                        </List.Content>
                        <List.Icon name='shopping cart' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button icon labelPosition='left'>
                                <Icon name='content' />
                                Details
                                </Button>
                        </List.Content>
                        <List.Icon name='shopping cart' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                            <List.Description as='a'>Updated 22 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button icon labelPosition='left'>
                                <Icon name='content' />
                                Details
                            </Button>
                        </List.Content>
                        <List.Icon name='shopping cart' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        </div>
    );
};

OrderList.defaultProps = {
    title: 'Point of Sales System'
};

export default OrderList;