import React from 'react'
import PropTypes from 'prop-types'

const SubmitButtons = ({isLoading, handleSubmit, handleReset}) => {
  return (
    <>
      <section className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                <p className="control">
                  <button
                    className={`button is-rounded is-success ${isLoading ? "is-loading" : ""}`}
                    onClick={handleSubmit}
                  >
                    Invia
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-right">
              <div className="field">
                <p className="control">
                  <button
                    className="button is-rounded is-danger" disabled={isLoading}
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </p>
              </div>
            </div>
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