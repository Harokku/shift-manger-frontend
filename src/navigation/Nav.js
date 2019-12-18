import React from 'react'
import PropTypes from 'prop-types'
import {Link, Route, Switch} from "react-router-dom";
import Login from "../login/Login";
import ShiftForm from "../shift/ShiftForm";

const Nav = (props) => {
  
  return (
    <>

      <nav className="columns is-centered">
        <div className="column is-half">
          <div className="tabs is-toggle is-toggle-rounded is-centered">
            <ul>
              <li className="is-active">
                <Link to="shift">
                  <span className="icon is-small"><i className="fas fa-envelope"/></span>
                  <span>Turno</span>
                </Link>
              </li>
              <li>
                <Link to="change">
                  <span className="icon is-small"><i className="fas fa-retweet"/></span>
                  <span>Cambi</span>
                </Link>
              </li>
              <li>
                <Link to="license">
                  <span className="icon is-small"><i className="fas fa-calendar-times"/></span>
                  <span>Permessi</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/shift">
          <ShiftForm/>
        </Route>
      </Switch>

    </>
  )
}

Nav.propTypes = {}

export default Nav