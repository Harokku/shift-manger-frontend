import React from 'react'
import PropTypes from 'prop-types'

const WorkedShift = ({isFormEnable, selectEntries, formData, formUpdate}) => {

  return (
    <>
      <div className="container">
        <div className="panel is-info">
          <p className="panel-heading">
            Turno svolto
          </p>

          <div className="panel-block">
            <div className="field">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={formData.manualCompilation}
                  onChange={event => {
                    const val = event.target.checked;
                    formUpdate("manualCompilation", val)
                  }}
                  disabled={!isFormEnable}
                />
                Turno svolto diverso da quello preimpostato
              </label>
              <div className="control">
                <input
                  className="input" type="text" placeholder="Motivazione"
                  disabled={!formData.manualCompilation}
                />
              </div>
              <p className="help">Motivazione turno differente da quello assegnato</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Operatore</label>
              <div className="control">
                <input className="input" type="text" placeholder="Cognome Nome"
                       value={formData.name}
                       disabled={true}
                       required
                />
              </div>
              <p className="help">Cognome e nome dell'operatore</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Data turno</label>
              <div className="control">
                <input className="input" type="date" placeholder="Data"
                       disabled={!isFormEnable || !formData.manualCompilation}
                       value={formData.date}
                       onChange={event => {
                         const val = event.target.value
                         formUpdate("date", val)
                       }}
                       required
                />
              </div>
              <p className="help">Data del turno dichiarato</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Postazione</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    value={formData.location}
                    onChange={event => {
                      const val = event.target.value
                      formUpdate("location", val)
                    }}
                    disabled={!isFormEnable || !formData.manualCompilation}
                    required
                  >
                    {
                      selectEntries.locations
                        ? selectEntries.locations.map(location => (
                          <option key={location.id} value={location.name}>{location.name}</option>
                        ))
                        : <option>...loading</option>
                    }
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-globe"/>
                </span>
              </div>
              <p className="help">Postazione in cui si è effettuato il turno</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Turno</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    value={formData.shift}
                    onChange={event => {
                      const val = event.target.value
                      formUpdate("shift", val)
                    }}
                    disabled={!isFormEnable || !formData.manualCompilation}
                    required
                  >
                    {
                      selectEntries.shifts
                        ? selectEntries.shifts.map(shift => (
                          <option key={shift.id} value={shift.name}>{shift.name}</option>
                        ))
                        : <option>...loading</option>
                    }
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-clock"/>
                </span>
              </div>
              <p className="help">Quando si è svolto il turno</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Mezzo</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    value={formData.vehicle}
                    onChange={event => {
                      const val = event.target.value
                      formUpdate("vehicle", val)
                    }}
                    disabled={!isFormEnable || !formData.manualCompilation}
                    required
                  >
                    {
                      selectEntries.vehicles
                        ? selectEntries.vehicles.map(vehicle => (
                          <option key={vehicle.id} value={vehicle.name}>{vehicle.name}</option>
                        ))
                        : <option>...loading</option>
                    }
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-ambulance"/>
                </span>
              </div>
              <p className="help">Mezzo di soccorso assegnato</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Ruolo</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    value={formData.role}
                    onChange={event => {
                      const val = event.target.value
                      formUpdate("role", val)
                    }}
                    disabled={!isFormEnable || !formData.manualCompilation}
                    required
                  >
                    {
                      selectEntries.roles
                        ? selectEntries.roles.map(role => (
                          <option key={role.id} value={role.name}>{role.name}</option>
                        ))
                        : <option>...loading</option>
                    }
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-user"/>
                </span>
              </div>
              <p className="help">Ruolo ricoperto durante il turno</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

WorkedShift.propTypes = {
  isFormEnable: PropTypes.bool.isRequired,
  selectEntries: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  formUpdate: PropTypes.func.isRequired,
}

export default WorkedShift