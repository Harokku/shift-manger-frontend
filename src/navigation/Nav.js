import React from 'react'
import PropTypes from 'prop-types'
import {Link, Route, Switch} from "react-router-dom";
import Login from "../login/Login";
import ShiftForm from "../shift/ShiftForm";
import ShiftMain from "../shift/ShiftMain";
import {checkIfRole} from "../utils/checkRole";
import ChangeMain from "../changeRequest/ChangeMain";

const Nav = (props) => {

  return (
    <>

      <nav className="columns is-centered">
        <div className="column is-half">
          <div className="tabs is-toggle is-toggle-rounded is-centered">
            <ul>
              <li>
                <Link activeClassName="is-active" to="shift">
                  <span className="icon is-small"><i className="fas fa-envelope"/></span>
                  <span>Turno</span>
                </Link>
              </li>
              <li>
                <Link activeClassName="is-active" to="change">
                  <span className="icon is-small"><i className="fas fa-retweet"/></span>
                  <span>Cambi</span>
                </Link>
              </li>
              <li>
                <Link activeClassName="is-active" to="license">
                  <span className="icon is-small"><i className="fas fa-calendar-times"/></span>
                  <span>Permessi</span>
                </Link>
              </li>
              {checkIfRole("manager")
                ? <li>
                  <Link activeClassName="is-active" to="managerequests">
                    <span className="icon is-small"><i className="fas fa-balance-scale"/></span>
                    <span>Gestione</span>
                  </Link>
                </li>
                : <></>
              }
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/shift">
          <ShiftMain/>
        </Route>
        <Route path="/change">
          <ChangeMain/>
        </Route>
      </Switch>

    </>
  )
}

Nav.propTypes = {}

export default Nav