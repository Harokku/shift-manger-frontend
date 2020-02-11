import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Request from "./Request";
import axios from "axios";
import moment from "moment"
import {readJWT} from "../utils/readJWT";

const RequestsMain = (props) => {
  // Requests list
  const [reqList, setReqList] = useState([]);

  // Refetch event to trigger effect update (will switch state when refetch is needed)
  const [needRefetch, doRefetch] = useState(false);

  const backEnd = process.env.REACT_APP_BACKEND;
  useEffect(() => {
    const fetchData = async () => {

      const reqResponse = await axios.get(
        `${backEnd}/changes/all`,
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      );
      if (reqResponse.data) {
        setReqList(reqResponse.data);
      }
    }
    fetchData();
  }, [needRefetch]);

  // Handle request response
  const handleRequest = async (id, status) => {
    // TODO: Implement func
    try {
      await axios.post(
        `${backEnd}/manager/managechange`,
        {
          id,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      )
    } catch (e) {
      console.error(e);
      alert('Errore durante la gestione della richiesta')
      return
    }
    console.info(`Request n: ${id}, managed with state: ${status}`)
    doRefetch(state => !state)
  };

  return (
    <>
      <div className="container">
        {
          reqList.map(req => (
            <Request
              key={req.id}
              id={req.id}
              status={req.status}
              requestDate={req.applicant_date}
              applicant={req.applicant_name}
              with={req.with_name}
              handleRequest={handleRequest}/>
          ))
        }
      </div>
    </>
  )
}

RequestsMain.propTypes = {}

export default RequestsMain