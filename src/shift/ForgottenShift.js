import React from 'react'
import PropTypes from 'prop-types'
import "bulma-switch/dist/css/bulma-switch.min.css"

const ForgottenShift = ({isFormEnable, formData, formUpdate}) => {

  return (
    <>
      <section className="container">
        <div className={`panel ${formData.stampForgot ? "is-success" : "is-danger"}`}>
          <div className="panel-heading">
            <div className="field">
              <input id="switchForgottenShift"
                     type="checkbox"
                     name="switchForgottenShift"
                     className="switch"
                     checked={formData.stampForgot}
                     onChange={event => {
                       const val = event.target.checked;
                       formUpdate("stampForgot", val)
                     }}
                     disabled={!isFormEnable}
              />
              <label htmlFor="switchForgottenShift">Straordinari</label>
            </div>
          </div>

          {formData.stampForgot && <>
            <div className="panel-block">
              <div className="field">
                <label className="label">Ora ingresso</label>
                <div className="control">
                  <input className="input" type="time" placeholder="13:45"
                         disabled={!isFormEnable || !formData.stampForgot}
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
                         disabled={!isFormEnable || !formData.stampForgot}
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
          </>}

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