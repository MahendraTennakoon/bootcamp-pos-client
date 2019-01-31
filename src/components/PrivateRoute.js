import React from "react";
import { 
    Route, 
    Redirect,
  } from "react-router-dom";

  const fakeAuth = {
    authenticate(cb) {
        console.log(localStorage.getItem('isAuthenticated'));
      this.isAuthenticated = true;
    },
    isAuthenticated () {
        return localStorage.getItem('isAuthenticated') === 'true';
    },
    signout(cb) {
      this.isAuthenticated = false;
    }
  };

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => {
      if (fakeAuth.isAuthenticated()) {
        return <Component {...props} />
      } else {
        return <Redirect to='/login' />
      }
    }}></Route>
  );

export default PrivateRoute;