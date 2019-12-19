import React from 'react'
import PropTypes from 'prop-types'

const SubmitButtons = ({isLoading}) => {
  return (
    <>
      <section className="container">
        <div className="field is-grouped">
          <p className="control">
            <button className={`button is-rounded is-success ${isLoading ? "is-loading" : ""}`}>Invia</button>
          </p>
          <p className="control">
            <button className="button is-rounded is-danger" disabled={isLoading}>Reset</button>
          </p>
        </div>
      </section>
    </>
  )
}

SubmitButtons.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default SubmitButtons