import React from 'react';
import './App.scss';
import jwtDecoder from "jwt-decode"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"
import Login from "./login/Login";
import Protected from "./navigation/Protected";

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

// TODO: Implement auth check
const checkIfAuth = () => {
  // Try to read token from local or session
  const authToken = localStorage.getItem("jwt") !== null ? localStorage.getItem("jwt") : sessionStorage.getItem("jwt");
  let decoded; // Will store decoded token

  // If token is present and valid and not expired return true (authenticated), else return false
  try {
    decoded = jwtDecoder(authToken)
  } catch (e) {
    // If error (not valid) return false (not authenticated and clear storage
    localStorage.removeItem("jwt")
    sessionStorage.removeItem("jwt")
    return false
  }
  // FIXME: Remove in prod
  console.info(decoded)
  // If error (expired) return false (not authenticated and clear storage
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem("jwt")
    sessionStorage.removeItem("jwt")
    return true
  } else {
    // Token ok, return true (authenticated)
    return false
  }
}

export default App;
