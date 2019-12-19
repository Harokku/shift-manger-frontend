import React from 'react'
import PropTypes from 'prop-types'
import WorkedShift from "./WorkedShift";
import OverworkedShift from "./OverworkedShift";
import ForgottenShift from "./ForgottenShift";

const ShiftForm = (props) => {
  return (
    <>
      <WorkedShift/>
      <OverworkedShift/>
      <ForgottenShift/>
    </>
  )
}

ShiftForm.propTypes = {}

export default ShiftForm