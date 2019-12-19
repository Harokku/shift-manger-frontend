import React, {useState} from 'react'
import PropTypes from 'prop-types'
import "./Login.scss"
import axios from 'axios'
import {useHistory} from "react-router-dom"
import {checkIfAuth} from "../utils/checkAuth";

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberme] = useState(true);
  const [formEnable, setFormEnable] = useState(true);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Disable form input
    setFormEnable(false)

    // Read backend url
    const backend = process.env.REACT_APP_BACKEND;

    // Create post body from state
    const user = {
      username,
      password,
    };

    // Login the user
    const response = await axios.post(`${backend}/login`, user).catch(() => alert("Invalid user or pass"))

    if (!response) {
      setFormEnable(true)
    }

    // If auth set JWT bearer
    if (response) {
      rememberme ? localStorage.setItem("jwt", response.data.token) : sessionStorage.setItem("jwt", response.data.token)
      // Redirect to protected home (/)
      history.push("/")
    }
  };

  return (
    <>
      {
        checkIfAuth()
          ? history.push("/")
          : <section className="hero is-primary is-fullheight">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-5-tablet is-4-desktop is-4-widescreen">
                    <form action="" className="box" onSubmit={handleSubmit}>
                      <div className="field">
                        <label htmlFor="" className="label">Email</label>
                        <div className="control has-icons-left">
                          <input
                            type="email"
                            placeholder="nome.cognome@crivarese.it"
                            className="input"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            required
                            disabled={!formEnable}
                          />
                          <span className="icon is-small is-left">
                  <i className="fa fa-envelope"/>
                </span>
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="" className="label">Password</label>
                        <div className="control has-icons-left">
                          <input
                            type="password"
                            placeholder="*******"
                            className="input"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required
                            disabled={!formEnable}
                          />
                          <span className="icon is-small is-left">
                  <i className="fa fa-lock"/>
                </span>
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="" className="checkbox">
                          <input
                            type="checkbox"
                            checked={rememberme}
                            onChange={event => setRememberme(event.target.checked)}
                            disabled={!formEnable}
                          />
                          Ricorda credenziali
                        </label>
                      </div>
                      <div className="field">
                        <button
                          className={`button is-success ${formEnable ? '' : 'is-loading'}`}
                          disabled={!formEnable}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
      }
    </>
  )
}

Login.propTypes = {}

export default Login