import React, { Component } from 'react';
import { Table, Button, Icon, Confirm, Input } from 'semantic-ui-react';

class Item extends Component {
    state = { open: false, prevQuantity: this.props.item.quantity };
    showConfirm = () => this.setState({ open: true });

    handleConfirm = () => {
        this.setState({ open: false })
        this.props.handleRemoveItem(this.props.item.id);
    };

    handleCancel = () => this.setState({ open: false });
    
    handleReset = () => {
        this.setState(() => ({
            quantity: this.state.prevQuantity
        }));
        this.props.setItemQuantity(this.props.item.id, this.state.prevQuantity, false);
    };
    handleOnChangeQty = (quantity) => {
        quantity = parseInt(quantity);
        if (isNaN(quantity)) {
            quantity = 0;
        };
        this.props.setItemQuantity(this.props.item.id, quantity, true);
    };

    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.item.id}</Table.Cell>
                <Table.Cell>{this.props.item.name}</Table.Cell>
                <Table.Cell>{this.props.item.price}</Table.Cell>
                <Table.Cell>
                    <Input
                        onChange={(e) => {
                            this.handleOnChangeQty(e.target.value);
                        }}
                        action={<Button disabled={!this.props.item.isEditing} onClick={this.handleReset}>Reset</Button>}
                        value={this.props.item.quantity}
                    />
                </Table.Cell>
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