import React, { Component } from 'react';
import Item from './Item';
import { Button, Icon, Table } from 'semantic-ui-react';
const axios = require('axios');

class Items extends Component {
    state = {
        items: [],
        error: undefined
    };
    componentDidMount() {
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
                        <Table.HeaderCell colSpan='4'>
                            <Button floated='right' icon labelPosition='left' primary size='small'>
                                <Icon name='add' /> Add Item
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
};

export default Items;