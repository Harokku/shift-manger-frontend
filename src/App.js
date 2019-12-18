import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"
import Login from "./login/Login";
import Protected from "./navigation/Protected";
import {checkIfAuth} from "./utils/checkAuth";

function App() {
  return (
    <>
      <Router>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/">
          <Protected/>
        </PrivateRoute>
      </Router>
    </>
  );
}

function PrivateRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={() =>
        checkIfAuth()
          ? (children)
          : (
            <Redirect to="/login"/>
          )
      }
    />
  )
}

export default App;
