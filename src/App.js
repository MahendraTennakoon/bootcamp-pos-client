import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import OrderList from './components/OrderList';
import { Container } from 'semantic-ui-react';
import OrderDetails from "./components/OrderDetails";
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <PrivateRoute path="/orders" component={OrderList} />
          <PrivateRoute path="/order/:order_id" component={OrderDetails} />
        </Container>
      </div>
    );
  }
}

export default App;
