import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import OrderList from './components/OrderList';
import { Container } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import OrderDetails_2 from "./components/OrderDetails_2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Route path="/orders" component={OrderList} />
          <Route path="/order/:order_id" component={OrderDetails_2} />
        </Container>
      </div>
    );
  }
}

export default App;
