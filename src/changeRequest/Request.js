import React from 'react'
import PropTypes from 'prop-types'
import moment from "moment"
import "bulma-ribbon/dist/css/bulma-ribbon.min.css"

const Request = ({requestData}) => {
  const requestStatus = {
    rejected: {
      status: "Rifiutato",
      color: "is-danger"
    },
    pending: {
      status: "In attesa",
      color: "is-warning"
    },
    accepted: {
      status: "Confermato",
      color: "is-success"
    }
  };

  return (
    <>
      <div className="box has-ribbon">
        <article className="media">
          <div className="media-content">
            <div className="content">
              Cambio del:
              <br/>
              <strong>{moment(requestData.applicant_date).format("dddd DD MMM YYYY")}</strong>
              <br/>
              Con il collega <strong>{requestData.with_name}</strong>
            </div>
          </div>
          <div
            className={`ribbon ${requestStatus[requestData.status].color}`}>
            {requestStatus[requestData.status].status}
          </div>
        </article>
      </div>
    </>
  )
}

Request.propTypes = {
  requestData: PropTypes.object.isRequired
}

export default Request