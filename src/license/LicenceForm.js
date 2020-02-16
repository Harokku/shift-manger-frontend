import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";
import {readJWT} from "../utils/readJWT";

const LicenceForm = (props) => {
  const backEnd = process.env.REACT_APP_BACKEND;

  // Initialize new default date
  const defaultDate = new Date();
  const defaultDateFormat = moment(defaultDate).format("ddd DD MMM YYY")

  // Date object for calendar and moment instances for display data
  const [reqDate, setReqDate] = useState({
    raw: [defaultDate, defaultDate],
    start: defaultDateFormat,
    end: defaultDateFormat,
    isPristine: true,
  });

  // Handle date change
  const handleDateChange = (date) => {
    const newDate = {
      raw: date,
      start: moment(date[0]).format("ddd DD MMM YYY"),
      end: moment(date[1]).format("ddd DD MMM YYY"),
      isPristine: false,
    };
    setReqDate(newDate);
  };

  // Motivation and if chenge is requested from coordinator
  const [motivation, setMotivation] = useState("");
  const [isFromCoordinator, setIsFromCoordinator] = useState(false);

  // Marshal from data to backend JSON format
  const marshalToBackEndFormat = () => (
    {
      from: moment(reqDate.raw[0]).toISOString(true),
      to: moment(reqDate.raw[1]).toISOString(true),
      motivation: motivation,
      from_coordinator: isFromCoordinator,
    }
  );

  // Handle submit event
  const handleSubmit = async () => {
    console.info(marshalToBackEndFormat());
    try {
      await axios.post(
        `${backEnd}/license/request`,
        marshalToBackEndFormat(),
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      )
    } catch (e) {
      console.error(e)
      alert(`Errore durante l'invio della richiesta ferie:\n\n${e}`);
      return
    }
    alert(`Richiesta ferie inviata correttamente`)
    handleReset();
  };

  // Reset form
  const handleReset = () => {
    setReqDate({
      raw: [defaultDate, defaultDate],
      start: defaultDateFormat,
      end: defaultDateFormat,
      isPristine: true,
    });
    setMotivation("");
    setIsFromCoordinator(false);
  };

  return (
    <>
      <section className="section is-small">
        <div className="panel is-info">
          <p className="panel-heading">
            Richiesta ferie
          </p>

          <div className="panel-block">
            <div className="field">
              <label className="label">Selezione date richieste</label>
              <div className="control">
                <Calendar
                  selectRange
                  value={reqDate.raw}
                  onChange={handleDateChange}
                />
              </div>
              <p className="help"><strong>Dal:</strong> {reqDate.start} <strong>Al:</strong> {reqDate.end}</p>
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
            <div className="field">
              <input id="fromCoordinatorSwitch"
                     type="checkbox"
                     name="fromCoordinatorSwitch"
                     className="switch"
                     checked={isFromCoordinator}
                     onChange={event => {
                       const val = event.target.checked;
                       setIsFromCoordinator(val)
                     }}
              />
              <label htmlFor="fromCoordinatorSwitch">Richiesto da coordinatore</label>
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

LicenceForm.propTypes = {}

export default LicenceForm