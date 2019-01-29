import React, { Component } from 'react';
import { Table, Button, Icon, Confirm, Input } from 'semantic-ui-react';

class Item extends Component {
    state = { open: false, isEditing: this.props.isEditing, prevQuantity: undefined, quantity: this.props.item.quantity }
    showConfirm = () => this.setState({ open: true })
    handleConfirm = () => {
        this.setState({ open: false })
        this.props.handleRemoveItem(this.props.item.id);
    };
    handleCancel = () => this.setState({ open: false });
    handleSet = (e) => {
        this.props.toggleEditStatus();
        this.setState(() => ({
            // isEditing: true,
            prevQuantity: this.props.item.quantity
        }));
        this.props.setItemQuantity(this.props.item.id, this.state.quantity);
    };
    handleReset = () => {
        this.props.toggleEditStatus();
        this.setState(() => ({
            // isEditing: false,
            quantity: this.state.prevQuantity
        }));
        this.props.setItemQuantity(this.props.item.id, this.state.prevQuantity);        
    };
    handleOnChangeQty = (quantity) => {
        quantity = parseInt(quantity);
        if(isNaN(quantity)) {
            quantity = 0;
        };
        this.setState(() => ({
            quantity: quantity
        }));
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
                        action={this.props.isEditing ? <Button onClick={this.handleReset}>Reset</Button> : <Button onClick={this.handleSet}>Set</Button>}
                        value={this.state.quantity}
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