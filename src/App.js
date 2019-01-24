import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import OrderList from './components/OrderList';

import { Container } from 'semantic-ui-react';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      error: undefined
    }

    axios.get('http://localhost:8080/orders')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState(() => ({ orders: response.data, error: undefined }));
        } else {
          this.setState(() => ({ error: 'There are no open orders!' }));
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState(() => ({ error: 'Error contacting server!' }));
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <OrderList orders={this.state.orders} error={this.state.error} />
        </Container>
      </div>
    );
  }
}

export default App;
