import React from 'react'
import PropTypes from 'prop-types'
import "./Login.scss"

const Login = (props) => (
  <>
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-4-widescreen">
              <form action="" className="box">
                <div className="field">
                  <label htmlFor="" className="label">Email</label>
                  <div className="control has-icons-left">
                    <input type="email" placeholder="nome.cognome@crivarese.it" className="input" required/>
                    <span className="icon is-small is-left">
                  <i className="fa fa-envelope"/>
                </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">Password</label>
                  <div className="control has-icons-left">
                    <input type="password" placeholder="*******" className="input" required/>
                    <span className="icon is-small is-left">
                  <i className="fa fa-lock"/>
                </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="checkbox">
                    <input type="checkbox"/>
                    Ricorda credenziali
                  </label>
                </div>
                <div className="field">
                  <button className="button is-success">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

Login.propTypes = {}

export default Login