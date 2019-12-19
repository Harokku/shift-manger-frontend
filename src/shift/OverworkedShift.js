import React from 'react'
import PropTypes from 'prop-types'

const OverworkedShift = ({isFormEnable, formData, formUpdate}) => {

  return (
    <>
      <section className="container">
        <div className="panel is-info">
          <p className="panel-heading">
            Straordinari
          </p>

          <div className="panel-block">
            <div className="field">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={formData.didOverwork}
                  onChange={event => {
                    const val = event.target.checked;
                    formUpdate("didOverwork", val)
                  }}
                  disabled={!isFormEnable}
                />
                Hai fatto straordinari?
              </label>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Numero missione</label>
              <div className="control">
                <input className="input" type="text" placeholder="203******"
                       disabled={!formData.didOverwork}
                       value={formData.mission}
                       onChange={event => {
                         const val = event.target.value
                         formUpdate("mission", val)
                       }}
                       required={formData.didOverwork}
                />
              </div>
              <p className="help">Numero missione sforo</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Ora stimbratura</label>
              <div className="control">
                <input className="input" type="time" placeholder="13:45"
                       disabled={!formData.didOverwork}
                       value={formData.overworkEnd}
                       onChange={event => {
                         const val = event.target.value
                         formUpdate("overworkEnd", val)
                       }}
                       required={formData.didOverwork}
                />
              </div>
              <p className="help">Ora in cui si ha terminato il turno</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

OverworkedShift.propTypes = {
  isFormEnable: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
  formUpdate: PropTypes.func.isRequired,
};

export default OverworkedShift