import React, { Component } from 'react';
import Item from './Item';
import { Button, Icon, Table, Modal } from 'semantic-ui-react';
import AddItems from './AddItems';
const axios = require('axios');

class Items extends Component {
    state = {
        items: [],
        error: undefined
    };
    handleSave = (items) => {
        axios
            .put(`http://localhost:8080/orders/${this.props.order_id}`, items)
            .then((response) => {
                this.loadItems();
            })
            .catch((error) => {
                console.log(error);
                this.setState(() => ({ error: 'Error contacting server!' }));
            });
    }
    calculateTotalPrice = () => {
        return this.state.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.price }, 0);
    };
    calculateTotalQuantity = () => {
        return this.state.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.quantity }, 0);
    };
    loadItems = () => {
        axios.get(`http://localhost:8080/orders/${this.props.order_id}`)
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState(() => ({ items: response.data, error: undefined }));
                } else {
                    this.setState(() => ({ error: 'There are no items in this order!' }));
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState(() => ({ error: 'Error contacting server!' }));
            });
    };
    componentDidMount() {
        this.loadItems();
    }
    render() {
        return (
            <Table compact celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Item ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.state.items.map((item) => <Item item={item} key={item.id} />)
                    }
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell>
                            <strong>Total: {this.state.items.length > 0 && <span>{this.calculateTotalPrice()}</span>}</strong>
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan='3'>
                            <strong>Total: {this.state.items.length > 0 && <span>{this.calculateTotalQuantity()}</span>}</strong>
                        </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            <Modal trigger={
                                <Button floated='right' icon labelPosition='left' primary size='small'>
                                    <Icon name='add' /> Add Items
                                </Button>
                            }>
                                <Modal.Header>Add Items</Modal.Header>
                                <Modal.Content>
                                    <AddItems existingItems={this.state.items} handleSave={this.handleSave} />
                                </Modal.Content>
                            </Modal>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
};

export default Items;