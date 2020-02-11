import React from 'react'
import PropTypes from 'prop-types'
import ShiftForm from "./ShiftForm";
import PastShifts from "./PastShifts";
import "bulma-divider/dist/css/bulma-divider.min.css"
import Planning from "./Planning";

const ShiftMain = (props) => {
  return (
    <>
      <Planning/>
      <PastShifts/>
      <div className="container">
        <div className="is-divider" data-content="Nuovo cartellino"/>
      </div>
      <ShiftForm/>
    </>
  )
}

ShiftMain.propTypes = {}

export default ShiftMain