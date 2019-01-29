import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

const Item = (props) => {
    const handleRemove = () => {
        props.handleRemoveItem(props.item.id);
    };
    return (
        <Table.Row>
            <Table.Cell>{props.item.id}</Table.Cell>
            <Table.Cell>{props.item.name}</Table.Cell>
            <Table.Cell>{props.item.price}</Table.Cell>
            <Table.Cell>{props.item.quantity}</Table.Cell>
            <Table.Cell>
                <Button 
                    icon 
                    labelPosition='left' 
                    color="black" 
                    size='small'
                    onClick={handleRemove}
                >
                    <Icon name='remove circle' /> Remove
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};


export default Item;