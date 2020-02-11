import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Planning = (props) => {
  const [showPlanning, setShowPlanning] = useState(false)

  return (
    <>
      <div className="container">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Planning turni
            </p>
            <button
              className="card-header-icon"
              onClick={() => {
                setShowPlanning(!showPlanning)
              }}
            >
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"/>
              </span>
            </button>
          </header>
          {showPlanning &&
          <div className="card-content">
            <div className="content">
              <figure className="image is-16by9">
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRtdF8ZHnR0APWdPiQhlpBzro1SwTBQs1vO8D6cKJQlT35zBNkea9eyYq8gkSW_dHtHzCHitOQx8iY0/pubhtml?widget=true&amp;headers=false"
                  className="has-ratio"
                />
              </figure>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  )
}

Planning.propTypes = {}

export default Planning