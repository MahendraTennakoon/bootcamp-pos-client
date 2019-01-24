import React from 'react';
import { Table } from 'semantic-ui-react';

const Item = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.item.id}</Table.Cell>
            <Table.Cell>{props.item.name}</Table.Cell>
            <Table.Cell>{props.item.price}</Table.Cell>
            <Table.Cell>{props.item.quantity}</Table.Cell>
        </Table.Row>
    );
};


export default Item;