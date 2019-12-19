import React from 'react'
import PropTypes from 'prop-types'

const SubmitButtons = ({isLoading, handleSubmit, handleReset}) => {
  return (
    <>
      <section className="container">
        <div className="field is-grouped">
          <p className="control">
            <button
              className={`button is-rounded is-success ${isLoading ? "is-loading" : ""}`}
              onClick={handleSubmit}
            >
              Invia
            </button>
          </p>
          <p className="control">
            <button
              className="button is-rounded is-danger" disabled={isLoading}
              onClick={handleReset}
            >
              Reset
            </button>
          </p>
        </div>
      </section>
    </>
  )
}

SubmitButtons.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
}

export default SubmitButtons