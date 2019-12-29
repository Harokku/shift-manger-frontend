import React from 'react'
import PropTypes from 'prop-types'

const SubmitButtons = ({isLoading, handleSubmit, handleReset}) => {
  return (
    <>
      <section className="section">
        <div className="level is-mobile">
          <div className="level-item">
            <button
              className={`button is-rounded is-success ${isLoading ? "is-loading" : ""}`}
              onClick={handleSubmit}
            >
              Invia
            </button>
          </div>
          <div className="level-item">
            <button
              className="button is-rounded is-danger" disabled={isLoading}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
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