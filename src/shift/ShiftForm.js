import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import WorkedShift from "./WorkedShift";
import OverworkedShift from "./OverworkedShift";
import ForgottenShift from "./ForgottenShift";
import SubmitButtons from "./SubmitButtons";
import moment from "moment";
import {updateFromObj} from "./formUpdate";
import axios from "axios";
import {readJWT} from "../utils/readJWT";

const ShiftForm = (props) => {
  // Form enable state
  const [isFormEnable, setIsFormEnable] = useState(true);

  // Logged user data for POST
  const [userData, setUserData] = useState({});
  // Get logged user data details
  const backEnd = process.env.REACT_APP_BACKEND;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${backEnd}/users/userdetails`,
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      );
      if (result.data) {
        setUserData(result.data)
        const userName = `${result.data.surname} ${result.data.name}`
        setWorkedShiftFormData(state => ({...state, name: userName}))
      }
    };
    fetchData()
  }, [backEnd]);

  // WorkedShift default and state
  const workedShiftDefault = {
    manualCompilation: true,
    name: "",
    date: moment().format("YYYY-MM-DD"),
    location: "AAT",
    shift: "Mattina",
    vehicle: "MSA-1",
    role: "Tecnico",
  };
  const [workedShiftformData, setWorkedShiftFormData] = useState(workedShiftDefault);
  const workedShiftUpdate = updateFromObj(setWorkedShiftFormData);

  // OverworkedShift default and state
  const overworkedShiftDefault = {
    didOverwork: false,
    overworkEnd: moment().format("HH:mm"),
    mission: "203"
  };
  const [overworkedShiftFormData, setOverworkedShiftFormData] = useState(overworkedShiftDefault);
  const overworkedShiftUpdate = updateFromObj(setOverworkedShiftFormData);

  // ForgottenShift default and state
  const forgottenShiftDefault = {
    stampForgot: false,
    shiftStart: moment().subtract(6.5, "h").format("HH:mm"),
    shiftEnd: moment().format("HH:mm"),
  };
  const [forgottenShiftFormData, setForgottenShiftFormData] = useState(forgottenShiftDefault);
  const forgottenShiftUpdate = updateFromObj(setForgottenShiftFormData);

  return (
    <>
      <WorkedShift
        isFormEnable={isFormEnable}
        formData={workedShiftformData}
        formUpdate={workedShiftUpdate}
      />
      <OverworkedShift
        isFormEnable={isFormEnable}
        formData={overworkedShiftFormData}
        formUpdate={overworkedShiftUpdate}
      />
      <ForgottenShift
        isFormEnable={isFormEnable}
        formData={forgottenShiftFormData}
        formUpdate={forgottenShiftUpdate}
      />
      <SubmitButtons
        isLoading={!isFormEnable}
      />
    </>
  )
}

ShiftForm.propTypes = {}

export default ShiftForm