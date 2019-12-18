import React, {useState} from 'react'
import PropTypes from 'prop-types'
import moment from "moment";


const WorkedShift = (props) => {
  const blankFrom = {
    manualCompilation: true,
    name: "",
    date: moment().format("YYYY-MM-DD"),
    location: "AAT",
    shift: "Mattina",
    vehicle: "MSA-1",
    role: "Tecnico",
  }
  const [isFormEnable, setIsFormEnable] = useState(true);
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState(blankFrom);

  // TODO: Select entries actually hardcoded, implement DB population
  const locationsList = [
    "AAT", "Tradate", "Varese"
  ];
  const shiftsList = [
    "Mattina", "Pomeriggio", "Notte"
  ];
  const vehiclesList = [
    "MSA-1", "MSA-2", "MSB-2", "MSB-3"
  ];
  const rolesList = [
    "Tecnico", "Autista", "Capo equipaggio", "Soccorritore"
  ];

  return (
    <>
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
                  setFormData(state => ({...state, manualCompilation: val}))
                }}
                disabled={!isFormEnable}
              />
              Turno svolto diverso da quello preimpostato
            </label>
            <div className="control">
              <input
                className="input" type="text" placeholder="Motivazione"
                disabled={true}
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
                     disabled={!formData.manualCompilation}
                     value={formData.date}
                     onChange={event => {
                       const val = event.target.value
                       setFormData(state => ({...state, date: val}))
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
                    setFormData(state => ({...state, location: val}))
                  }}
                  disabled={!formData.manualCompilation}
                  required
                >
                  {
                    locationsList.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))
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
                    setFormData(state => ({...state, shift: val}))
                  }}
                  disabled={!formData.manualCompilation}
                  required
                >
                  {
                    shiftsList.map(shift => (
                      <option key={shift} value={shift}>{shift}</option>
                    ))
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
                    setFormData(state => ({...state, vehicle: val}))
                  }}
                  disabled={!formData.manualCompilation}
                  required
                >
                  {
                    vehiclesList.map(vehicle => (
                      <option key={vehicle} value={vehicle}>{vehicle}</option>
                    ))
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
                    setFormData(state => ({...state, role: val}))
                  }}
                  disabled={!formData.manualCompilation}
                  required
                >
                  {
                    rolesList.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))
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
    </>
  )
}

WorkedShift.propTypes = {}

export default WorkedShift