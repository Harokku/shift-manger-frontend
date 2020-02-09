import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import axios from "axios"
import {readJWT} from "../utils/readJWT";
import Request from "./Request";

const PastRequests = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pastRequests, setPastRequests] = useState([]);
  const [showPastRequests, setShowPastRequests] = useState(false);

  const backEnd = process.env.REACT_APP_BACKEND;

  useEffect(() => {
    const fetchData = async () => {
      const pastRequestsResponse = await axios.get(
        `${backEnd}/changes/user`,
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      ).catch(err => {
        console.error(`Error retrieving past requests: ${err}`)
        setIsLoading(false)
      })
      if (pastRequestsResponse && pastRequestsResponse.data) {
        setPastRequests(pastRequestsResponse.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {pastRequests &&
        pastRequests.map(request => (
          <Request key={request.id} requestData={request}/>
        ))
        }
      </div>
    </>
  )
}

PastRequests.propTypes = {}

export default PastRequests