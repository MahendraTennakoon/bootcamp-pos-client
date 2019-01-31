import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
} from "react-router-dom";
import App from '../App';
import Login from './Login';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" exact component={Login} />
    </div>
  </Router>
);

export default AppRouter;