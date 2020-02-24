import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";
import {readJWT} from "../utils/readJWT";

const PermissionForm = (props) => {
  const backEnd = process.env.REACT_APP_BACKEND;

  // Initialize new default date
  const defaultDate = new Date();
  const defaultDateFormat = moment(defaultDate).format("ddd DD MMM YYY")

  // Date object for calendar and moment instances for display data
  const [reqDate, setReqDate] = useState({
    raw: defaultDate,
    display: moment(defaultDate).format("ddd DD MMM YYY"),
    isPristine: true,
  });

  // Handle date change
  const handleDateChange = (date) => {
    const newDate = {
      raw: date,
      display: moment(date).format("ddd DD MMM YYY"),
      isPristine: false,
    };
    setReqDate(newDate);
  };

  // Motivation and whole day flag
  const [motivation, setMotivation] = useState("");
  const [wholeDay, setWholeDay] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Marshal from data to backend JSON format
  const marshalToBackEndFormat = () => (
    wholeDay
      ? {
        date: moment(reqDate.raw).toISOString(true),
        motivation: motivation,
      }
      : {
        date: moment(reqDate.raw).toISOString(true),
        from: moment(from, "HH:mm").toISOString(true),
        to: moment(to, "HH:mm").toISOString(true),
        motivation: motivation,
      }
  );

  // Handle submit event
  const handleSubmit = async () => {
    try {
      await axios.post(
        `${backEnd}/permission/request`,
        marshalToBackEndFormat(),
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      )
    } catch (e) {
      console.error(e)
      alert(`Errore durante l'invio della richiesta permesso:\n\n${e}`);
      return
    }
    alert(`Richiesta permesso inviata correttamente`)
    handleReset();
  };

  // Reset form
  const handleReset = () => {
    setReqDate({
      raw: defaultDate,
      display: defaultDateFormat,
      isPristine: true,
    });
    setMotivation("");
    setFrom("");
    setTo("");
  };

  return (
    <>
      <section className="section is-small">
        <div className="panel is-info">
          <p className="panel-heading">
            Richiesta permessi
          </p>

          <div className="panel-block">
            <div className="field">
              <label className="label">Selezione la data richieste</label>
              <div className="control">
                <Calendar
                  value={reqDate.raw}
                  onChange={handleDateChange}
                />
              </div>
              <p className="help"><strong>Il giorno:</strong> {reqDate.display}</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <input id="wholeDaySwitch"
                     type="checkbox"
                     name="wholeDaySwitch"
                     className="switch"
                     checked={wholeDay}
                     onChange={event => {
                       const val = event.target.checked;
                       setWholeDay(val)
                     }}
              />
              <label htmlFor="wholeDaySwitch">Tutto il giorno</label>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Dalle ore:</label>
              <div className="control">
                <input className="input" type="time" placeholder="13:45"
                       disabled={wholeDay}
                       value={from}
                       onChange={event => {
                         const val = event.target.value
                         setFrom(val)
                       }}
                       required={!wholeDay}
                />
              </div>
              <p className="help">Ora di inizio del permesso</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Alle ore:</label>
              <div className="control">
                <input className="input" type="time" placeholder="13:45"
                       disabled={wholeDay}
                       value={to}
                       onChange={event => {
                         const val = event.target.value
                         setTo(val)
                       }}
                       required={!wholeDay}
                />
              </div>
              <p className="help">Ora di fine del permesso</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="field">
              <label className="label">Motivazione</label>
              <div className="control has-icons-left">
                <input
                  value={motivation}
                  className="input" type="text" placeholder="Motivazione richiesta"
                  required
                  onChange={event => {
                    const val = event.target.value;
                    setMotivation(val)
                  }}
                />
              </div>
            </div>
          </div>

          <div className="panel-block">
            <button className="button is-success"
                    disabled={reqDate.isPristine}
                    onClick={handleSubmit}
            >Invia richiesta
            </button>
          </div>

        </div>
      </section>
    </>
  )
}


PermissionForm.propTypes = {}

export default PermissionForm