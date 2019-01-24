import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import OrderList from './components/OrderList';

import { Container } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          "order_id": 1,
          "created_date": "2019-01-22"
        },
        {
          "order_id": 2,
          "created_date": "2019-01-22"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <OrderList orders={ this.state.orders } />
        </Container>
      </div>
    );
  }
}

export default App;
