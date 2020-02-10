import React from 'react'
import PropTypes from 'prop-types'
import Request from "./Request";

const RequestsMain = (props) => {
  // Handle request response
  const handleRequest = (acceptance) => {
    console.info(`Request managed with state: ${acceptance}`)
  }

  return (
    <>
      <div className="container">
        <Request
          status="pending"
          requestDate={Date.now()}
          applicant="Crenna"
          with="Galetti"
          handleRequest={handleRequest}
        />
      </div>
    </>
  )
}

RequestsMain.propTypes = {}

export default RequestsMain