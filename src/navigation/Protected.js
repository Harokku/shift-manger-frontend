import React from 'react'
import "./heroBackground.css"
import background from "./veil-fog.jpg"
import PropTypes from 'prop-types'
import Nav from "./Nav";
import {useHistory} from "react-router-dom";

const Protected = (props) => {
  let history = useHistory();
  // Logout handler
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <>
      {/*Hero*/}
      <section className="hero is-bold is-light has-background">
        <img className="hero-background is-transparent" src={background}/>
        <div className="hero-head">
          <div className="level is-mobile">
            <div className="level-left"/>
            <div className="level-right">
              <div className="level-item">
                <button className="button is-light is-link"
                        onClick={() => handleLogout()}
                >
                <span className="icon is-small">
                  <i className="fas fa-sign-out-alt"/>
                </span>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Gestione turni
            </h1>
          </div>
        </div>
      </section>
      {/*Navigation section*/}
      <Nav/>
    </>
  )
}

Protected.propTypes = {}

export default Protected