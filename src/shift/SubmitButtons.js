import React from 'react'
import PropTypes from 'prop-types'

const SubmitButtons = (props) => {
  return (
    <>
      <section className="container">
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-rounded is-success">Invia</button>
          </p>
          <p className="control">
            <button className="button is-rounded is-danger">Annulla</button>
          </p>
        </div>
      </section>
    </>
  )
}

SubmitButtons.propTypes = {}

export default SubmitButtons