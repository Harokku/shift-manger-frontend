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


  // Handle submit posting data to backend
  const handleSubmit = async () => {
    setIsFormEnable(false);
    try {
      await axios.post(
        `${backEnd}/sheets/shift`,
        marshalToBackEndFormat(),
        {
          headers: {
            Authorization: `Bearer ${readJWT()}`
          }
        }
      )
    } catch (e) {
      console.log(e);
      alert(`Errore durante l'invio del turno:\n\n${e}\n\nRiprova piu tardi`)
      setIsFormEnable(true);
      return
    }
    alert("Turno inviato correttamente");
    handleReset();
    setIsFormEnable(true);
  };

  // Marshal form data to backend JSON format
  const marshalToBackEndFormat = () => {
    return {
      // WorkedShift data
      manual_compilation: workedShiftformData.manualCompilation,
      name: workedShiftformData.name,
      date: moment(workedShiftformData.date).toISOString(true),
      location: workedShiftformData.location,
      shift: workedShiftformData.shift,
      vehicle: workedShiftformData.vehicle,
      role: workedShiftformData.role,

      // OverworkedShift data
      did_overwork: overworkedShiftFormData.didOverwork,
      overwork_end: moment(overworkedShiftFormData.overworkEnd, "HH:mm").toISOString(true),
      mission: overworkedShiftFormData.mission,

      // ForgottenShift data
      stamp_forgot: forgottenShiftFormData.stampForgot,
      shift_start: moment(forgottenShiftFormData.shiftStart, "HH:mm").toISOString(true),
      shift_end: moment(forgottenShiftFormData.shiftEnd, "HH:mm").toISOString(true),
    }
  };

  // Handle reset resetting form to default value
  const handleReset = () => {
    setWorkedShiftFormData(workedShiftDefault);
    setOverworkedShiftFormData(overworkedShiftDefault);
    setForgottenShiftFormData(forgottenShiftDefault);
  }

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
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </>
  )
}

ShiftForm.propTypes = {}

export default ShiftForm