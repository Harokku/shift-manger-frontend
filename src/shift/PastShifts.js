import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import axios from "axios"
import moment from "moment"
import {readJWT} from "../utils/readJWT";

const PastShifts = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [pastShifts, setPastShifts] = useState([]);
  const [showPastShifts, setShowPastShifts] = useState(false);

  const backEnd = process.env.REACT_APP_BACKEND;

  useEffect(() => {
    const fetchData = async () => {
      const pastTurnsResponse = await axios.get(
        `${backEnd}/sheets/pastshifts`,
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      ).catch(err => {
        console.error(`Error retrieving past shifts: ${err}`)
        setIsLoading(false)
      })
      if (pastTurnsResponse && pastTurnsResponse.data) {
        setPastShifts(pastTurnsResponse.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="section">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Cartellini gia inviati
            </p>
            <button
              className="card-header-icon"
              onClick={() => {
                setShowPastShifts(!showPastShifts)
              }}
            >
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"/>
              </span>
            </button>
          </header>
          {showPastShifts &&
          <div className="card-content">
            <div className="content">
              {pastShifts.map((shift, index) => (
                <article className="message is-dark" key={index}>
                  <div className="message-body">
                    <b>{moment(shift, "DD-MM-YYYY").format("dddd")}</b> - {moment(shift, "DD-MM-YYYY").format("DD MMM YYYY")}
                  </div>
                </article>
              ))}
            </div>
          </div>
          }
        </div>
      </section>
    </>
  )
}

PastShifts.propTypes = {}

export default PastShifts