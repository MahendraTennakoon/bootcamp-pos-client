import React, { Component } from 'react';
import { Table, Button, Icon, Confirm } from 'semantic-ui-react';

class Item extends Component {
    state = { open: false }
    showConfirm = () => this.setState({ open: true })
    handleConfirm = () => {
        this.setState({ open: false })
        this.props.handleRemoveItem(this.props.item.id);
    };
    handleCancel = () => this.setState({ open: false })

    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.item.id}</Table.Cell>
                <Table.Cell>{this.props.item.name}</Table.Cell>
                <Table.Cell>{this.props.item.price}</Table.Cell>
                <Table.Cell>{this.props.item.quantity}</Table.Cell>
                <Table.Cell>
                    <Button
                        icon
                        labelPosition='left'
                        color="black"
                        size='small'
                        onClick={this.showConfirm}
                    >
                        <Icon name='remove circle' /> Remove
                    </Button>
                    <Confirm
                        open={this.state.open}
                        onCancel={this.handleCancel}
                        onConfirm={this.handleConfirm}
                        content='Are you sure you want to remove this item?'
                        cancelButton='No'
                        confirmButton="Yes"
                    />
                </Table.Cell>
            </Table.Row>
        );
    }
};


export default Item;