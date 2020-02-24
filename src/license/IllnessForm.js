import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";
import {readJWT} from "../utils/readJWT";

const IllnessForm = (props) => {
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

  // Protocol number
  const [protocolNumber, setProtocolNumber] = useState("");

  // Marshal from data to backend JSON format
  const marshalToBackEndFormat = () => (
    {
      from: moment(reqDate.raw[0]).toISOString(true),
      to: moment(reqDate.raw[1]).toISOString(true),
      protocol_number: protocolNumber,
    }
  );

  // Handle submit event
  const handleSubmit = async () => {
    console.info(marshalToBackEndFormat());
    try {
      await axios.post(
        `${backEnd}/illness/request`,
        marshalToBackEndFormat(),
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      )
    } catch (e) {
      console.error(e)
      alert(`Errore durante l'invio dell'attestazione di malattia:\n\n${e}`);
      return
    }
    alert(`Attestazione malattia inviata correttamente`)
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
    setProtocolNumber("");
  };

  return (
    <>
      <section className="section is-small">
        <div className="panel is-info">
          <p className="panel-heading">
            Attestazione malattia
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
              <label className="label">Numero Protocollo</label>
              <div className="control has-icons-left">
                <input
                  value={protocolNumber}
                  className="input" type="text" placeholder="Numero protocollo"
                  required
                  onChange={event => {
                    const val = event.target.value;
                    setProtocolNumber(val)
                  }}
                />
              </div>
            </div>
          </div>

          <div className="panel-block">
            <button className="button is-success"
                    disabled={reqDate.isPristine}
                    onClick={handleSubmit}
            >Invia attestazione
            </button>
          </div>

        </div>
      </section>
    </>
  )
}


IllnessForm.propTypes = {}

export default IllnessForm