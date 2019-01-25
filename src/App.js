import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import OrderList from './components/OrderList';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <OrderList />
        </Container>
      </div>
    );
  }
}

export default App;
