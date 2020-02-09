import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import moment from "moment";
import Calendar from "react-calendar";
import {readJWT} from "../utils/readJWT";

const ChangeForm = (props) => {
  // Calendar state
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Selected operator
  const [selOperator, setSelOperator] = useState(null)

  // Operators list from DB
  const [operators, setOpeators] = useState();

  // Get operators from DB
  const backEnd = process.env.REACT_APP_BACKEND;
  useEffect(() => {
    const fetchData = async () => {

      const operatorsResponse = await axios.get(
        `${backEnd}/users/all`,
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      );
      if (operatorsResponse.data) {
        setOpeators(operatorsResponse.data)
        setSelOperator(operatorsResponse.data[0].id)
      }
    }
    fetchData();
  }, []);

  // Handle submit posting data to backend
  const handleSubmit = async () => {
    const marshalledDate = moment(selectedDate).toISOString(true)
    try {
      await axios.post(
        `${backEnd}/changes/request`,
        {
          applicant_date: marshalledDate,
          with_date: marshalledDate,
          with_name: selOperator
        },
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      )
    } catch (e) {
      console.error(e);
      alert(`Errore durante l'invio della richiesta:\n\n${e}\n\nRiprova piu tardi`)
      return
    }
    alert("Richietsa di cambio inviata correttamente")

  };

  return (
    <>
      <div className="container">
        <div className="columns is-centered is-narrow">
          <div className="column is-half">
            <p>Seleziona data per il cambio</p>
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
            />
            <div className="field">
              <label className="label">Con:</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    value={selOperator ? selOperator : ""}
                    onChange={event => {
                      setSelOperator(event.target.value)
                    }}
                    required
                  >
                    {
                      operators
                        ? operators.map(operator => (
                          <option key={operator.id} value={operator.id}>{operator.surname}</option>
                        ))
                        : <option>...loading</option>
                    }
                  </select>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="level is-mobile">
                <div className="level-left">
                  <button
                    className={`button is-rounded is-success`}
                    onClick={handleSubmit}
                  >
                    Invia
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

ChangeForm.propTypes = {}

export default ChangeForm