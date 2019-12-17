import React from 'react'
import PropTypes from 'prop-types'
import Nav from "./Nav";

const Protected = (props) => {
  return (
    <>
      {/*Hero*/}
      <section className="hero is-bold is-light">
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