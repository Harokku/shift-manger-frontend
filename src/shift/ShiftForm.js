import React, {useState} from 'react'
import PropTypes from 'prop-types'
import WorkedShift from "./WorkedShift";
import OverworkedShift from "./OverworkedShift";
import ForgottenShift from "./ForgottenShift";
import SubmitButtons from "./SubmitButtons";
import moment from "moment";
import {updateFromObj} from "./formUpdate";

const ShiftForm = (props) => {
  // Form enable state
  const [isFormEnable, setIsFormEnable] = useState(true);

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
      <SubmitButtons/>
    </>
  )
}

ShiftForm.propTypes = {}

export default ShiftForm