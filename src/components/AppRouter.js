import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import App from '../App';

const AppRouter = () => (
    <Router>
      <div>
        <Redirect from="/" to="orders" />
        <Route path="/orders" exact component={App} />
      </div>
    </Router>
  );
  
  export default AppRouter;