import React from 'react'
import PropTypes from 'prop-types'
import LicenceForm from "./LicenceForm";
import IllnessForm from "./IllnessForm";
import PermissionForm from "./PermissionForm";

const LicenseMain = (props) => {
  return (
    <>
      <LicenceForm/>
      <PermissionForm/>
      <IllnessForm/>
    </>
  )
}

LicenseMain.propTypes = {}

export default LicenseMain