import React, { Component } from 'react';
import Item from './Item';
import { Button, Icon, Table, Modal, Message } from 'semantic-ui-react';
import AddItems from './AddItems';
import update from 'immutability-helper';
import { fetchItems, addOrder } from '../actions/index';
import { connect } from 'react-redux';
const axios = require('axios');

class Items extends Component {
    state = {
        items: [],
        error: undefined,
        modalOpen: false
    };
    setItemQuantity = (item_id, quantity, edit_status) => {
        const index = this.state.items.findIndex(item => item.id === item_id);
        this.setState(() => ({
            items: update(this.state.items, { [index]: { quantity: { $set: quantity }, isEditing: { $set: edit_status } } })
        }));
    };
    handleAdd = (items) => {
        this.setState((prevState) => ({
            items: [...prevState.items, ...items]
        }));
        this.handleCloseModal();
    };
    handleShowModal = () => {
        this.setState(() => ({
            modalOpen: true
        }));
    };
    handleCloseModal = () => this.setState({ modalOpen: false });
    handleRemoveItem = (item_id) => {
        axios
            .delete(`http://localhost:8080/orders/${this.props.order_id}/${item_id}`)
            .then((response) => {
                this.loadItems();
            })
            .catch((error) => {
                console.log(error);
                this.setState(() => ({ error: 'Error contacting server!' }));
            });
    };
    handleDiscard = () => {
        // TODO: Add a loader
        // TODO: Use Redux
        this.loadItems();
    }
    handleSave = () => {
        axios
            .put(`http://localhost:8080/orders/${this.props.order_id}`, this.state.items)
            .then((response) => {
                this.loadItems();
            })
            .catch((error) => {
                console.log(error);
                this.setState(() => ({ error: 'Error contacting server!' }));
            });
    };
    calculateTotalPrice = () => {
        return this.state.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.quantity * currentValue.price }, 0);
    };
    calculateTotalQuantity = () => {
        return this.state.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.quantity }, 0);
    };
    loadItems = () => {
        axios.get(`http://localhost:8080/orders/${this.props.order_id}`)
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState(() => ({ items: response.data, error: undefined, isEditing: false }));
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
        this.props.fetchItems();
    };
    componentWillUnmount() {
        this.handleSave();
    };
    render() {
        return (
            <div>
                {
                    this.props.server_error ?
                        <Message negative>
                            <Message.Header>{this.props.server_error}</Message.Header>
                        </Message> :
                        <Table compact celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Item ID</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Price (LKR)</Table.HeaderCell>
                                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    this.state.items.map((item) => <Item setItemQuantity={this.setItemQuantity} handleRemoveItem={this.handleRemoveItem} item={item} key={item.id} />)
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
                                    <Table.HeaderCell colSpan='5'>
                                        <Modal
                                            open={this.state.modalOpen}
                                            onClose={this.handleCloseModal}
                                            trigger={
                                                <Button onClick={this.handleShowModal} floated='right' icon labelPosition='left' primary size='small'>
                                                    <Icon name='add' /> Add Items
                                                </Button>
                                            }>
                                            <Modal.Header>Add Items</Modal.Header>
                                            <Modal.Content>
                                                <AddItems existingItems={this.state.items} handleAdd={this.handleAdd} />
                                            </Modal.Content>
                                        </Modal>
                                    </Table.HeaderCell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='5'>
                                        <Button
                                            floated='right'
                                            icon
                                            labelPosition='left'
                                            negative
                                            size='small'
                                            onClick={this.handleDiscard}
                                        >
                                            <Icon name='cancel' /> Discard
                                        </Button>
                                        <Button
                                            floated='right'
                                            icon
                                            labelPosition='left'
                                            color='black'
                                            size='small'
                                            onClick={this.handleSave}
                                        >
                                            <Icon name='save' /> Save
                                        </Button>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                }
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        items: state.items,
        server_error: state.server_error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: order => dispatch(addOrder(order)),
        fetchItems: () => dispatch(fetchItems())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Items);