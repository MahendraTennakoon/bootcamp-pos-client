import React, { Component } from 'react';
import { Table, Button, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

class AddItems extends Component {
    newItems = [];
    state = {
        filteredItems: []
    };
    handleAdd = () => {
        this.props.handleAdd(this.newItems);
    };
    handleChangeQuantity = (item_id, name, price, quantity) => {
        const itemIndex = this.newItems.findIndex(item => item.id === item_id);

        let parseQty = parseInt(quantity, 10);

        if (isNaN(parseQty)) {
            parseQty = 0;
        }

        if (itemIndex === -1) {
            this.newItems.push({ id: item_id, name: name, price: price, quantity: parseQty });
        } else {
            this.newItems[itemIndex].quantity = parseQty;
        }
    }
    calculateTotalPrice = () => {
        return this.state.filteredItems.reduce((accumulator, currentValue) => { return accumulator + currentValue.price }, 0);
    };
    calculateTotalQuantity = () => {
        return this.state.filteredItems.reduce((accumulator, currentValue) => { return accumulator + currentValue.quantity }, 0);
    };
    componentDidMount() {
        const filteredItems = this.props.items.filter(item => {
            return !this.props.existingItems.some((element) => {
                return element.id === item.id
            })
        });

        this.setState(() => ({
            filteredItems: filteredItems
        }));
    }
    render() {
        return (
            <Table compact celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Item ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Unit Price (LKR)</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.state.filteredItems.map((item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.price}</Table.Cell>
                                <Table.Cell>
                                    <Input placeholder='0' onChange={(e) => {
                                        this.handleChangeQuantity(item.id, item.name, item.price, e.target.value);
                                    }} />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary size='small'
                                onClick={this.handleAdd}
                            >
                                <Icon name='save' /> Add
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
};

const mapStateToProps = state => {
    return {
        items: state.items,
        server_error: state.server_error
    }
};

export default connect(mapStateToProps)(AddItems);