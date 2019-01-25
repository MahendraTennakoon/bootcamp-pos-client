import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import OrderList from './components/OrderList';
import { Container } from 'semantic-ui-react';
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Route path="/orders" component={OrderList} />
        </Container>
      </div>
    );
  }
}

export default App;
