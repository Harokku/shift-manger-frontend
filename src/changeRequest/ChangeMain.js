import React from 'react'
import PropTypes from 'prop-types'
import PastRequests from "./PastRequests";

const ChangeMain = (props) => {
  return (
    <>
      <PastRequests/>
      <div className="container">
        <div className="is-divider" data-content="Nuova richiesta cambio"/>
      </div>
    </>
  )
}

ChangeMain.propTypes = {}

export default ChangeMain