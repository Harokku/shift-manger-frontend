import React from 'react'
import PropTypes from 'prop-types'

const ForgottenShift = ({isFormEnable, formData, formUpdate}) => {

  return (
    <>
      <section className="container">
        <div className="panel is-info">
          <p className="panel-heading">
            Mancata timbratura
          </p>

          <div className="panel-block">
            <div className="field">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={formData.stampForgot}
                  onChange={event => {
                    const val = event.target.checked;
                    formUpdate("stampForgot", val)
                  }}
                  disabled={!isFormEnable}
                />
                Hai dimenticato di stimbrare?
              </label>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Ora ingresso</label>
              <div className="control">
                <input className="input" type="time" placeholder="13:45"
                       disabled={!formData.stampForgot}
                       value={formData.shiftStart}
                       onChange={event => {
                         const val = event.target.value
                         formUpdate("shiftStart", val)
                       }}
                       required={formData.stampForgot}
                />
              </div>
              <p className="help">Ora di inizio turno</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Ora uscita</label>
              <div className="control">
                <input className="input" type="time" placeholder="13:45"
                       disabled={!formData.stampForgot}
                       value={formData.shiftEnd}
                       onChange={event => {
                         const val = event.target.value
                         formUpdate("shiftEnd", val)
                       }}
                       required={formData.stampForgot}
                />
              </div>
              <p className="help">Ora di fine turno</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

ForgottenShift.propTypes = {
  isFormEnable: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
  formUpdate: PropTypes.func.isRequired,
};

export default ForgottenShift