import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Request = (props) => {
  // Status CSS definition
  const reqStatus = {
    rejected: 'is-danger',
    pending: 'is-info',
    accepted: 'is-success',
  }

  return (
    <>
      <article className={`message is-small ${reqStatus[props.status]}`}>
        <div className="message-header">
          Cambio {moment(props.requestDate).format("ddd DD/MMM/YYYY")}
        </div>
        <div className="message-body">
          <strong>{props.applicant}</strong> -> <strong>{props.with}</strong>
          <div className="level is-mobile">
            <div className="level-left">
              <button className="button is-success is-outlined is-small is-rounded"
                      disabled={props.status !== "pending"}
                      onClick={() => props.handleRequest(true)}
              >
                <span className="icon is-small">
                  <i className="fas fa-check"/>
                </span>
                <span>Conferma</span>
              </button>
            </div>
            <div className="level-right">
              <button className="button is-danger is-outlined is-small is-rounded"
                      disabled={props.status !== "pending"}
                      onClick={() => props.handleRequest(false)}
              >
                <span className="icon is-small">
                  <i className="fas fa-times"/>
                </span>
                <span>Nega</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

Request.propTypes = {
  status: PropTypes.oneOf(['rejected', 'pending', 'accepted']).isRequired,
  requestDate: PropTypes.string.isRequired,
  applicant: PropTypes.string.isRequired,
  with: PropTypes.string.isRequired,
  handleRequest: PropTypes.func.isRequired,
}

export default Request