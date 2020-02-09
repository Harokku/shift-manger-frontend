import React from 'react'
import PropTypes from 'prop-types'
import PastRequests from "./PastRequests";
import ChangeForm from "./ChangeForm";
import "bulma-divider/dist/css/bulma-divider.min.css"

const ChangeMain = (props) => {
  return (
    <>
      <PastRequests/>
      <div className="container">
        <div className="is-divider" data-content="Nuova richiesta cambio"/>
      </div>
      <ChangeForm/>
    </>
  )
}

ChangeMain.propTypes = {}

export default ChangeMain