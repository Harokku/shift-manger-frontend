import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      <section className="hero is-bold is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Gestione turni
            </h1>
          </div>
        </div>
      </section>

      <nav className="columns is-centered">
        <div className="column is-half">
          <div className="tabs is-toggle is-toggle-rounded is-centered">
            <ul>
              <li className="is-active">
                <a>
                  <span className="icon is-small"><i className="fas fa-envelope"/></span>
                  <span>Turno</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon is-small"><i className="fas fa-retweet"/></span>
                  <span>Cambi</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon is-small"><i className="fas fa-calendar-times"/></span>
                  <span>Permessi</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container">
        <div className="panel is-info">
          <p className="panel-heading">
            Turno svolto
          </p>
          <div className="panel-block">
            <div className="field">
              <label className="checkbox">
                <input type="checkbox"/>
                Turno svolto diverso da quello preimpostato
              </label>
              <div className="control">
                <input className="input" type="text" placeholder="Motivazione"/>
              </div>
              <p className="help">Motivazione turno differente da quello assegnato</p>
            </div>

          </div>
          <div className="panel-block">
            <div className="field">
              <label className="label">Operatore</label>
              <div className="control">
                <input className="input" type="text" placeholder="Cognome Nome"/>
              </div>
              <p className="help">Cognome e nome dell'operatore</p>
            </div>
          </div>
          <div className="panel-block">
            <div className="field">
              <label className="label">Data turno</label>
              <div className="control">
                <input className="input" type="date" placeholder="Data"/>
              </div>
              <p className="help">Data del turno dichiarato</p>
            </div>
          </div>
          <div className="panel-block">
            <div className="field">
              <label className="label">Postazione</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select>
                    <option>AAT</option>
                    <option>Tradate</option>
                    <option>Varese</option>
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-globe"/>
                </span>
              </div>
              <p className="help">Postazione in cui si è effettuato il turno</p>
            </div>
          </div>
          <div className="panel-block">
            <div className="field">
              <label className="label">Turno</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select>
                    <option>Mattina</option>
                    <option>Pomeriggio</option>
                    <option>Notte</option>
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-clock"/>
                </span>
              </div>
              <p className="help">Quando si è svolto il turno</p>
            </div>
          </div>
          <div className="panel-block">
            <div className="field">
              <label className="label">Ruolo</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select>
                    <option>Autista MSB3</option>
                    <option>Capo equipaggio MSB3</option>
                    <option>Soccorritore MSB3</option>

                    <option>Autista MSB2</option>
                    <option>Capo equipaggio MSB2</option>
                    <option>Soccorritore MSB2</option>

                    <option>Tecnico MSA1</option>

                    <option>Tecnico MSA2</option>
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-user"/>
                </span>
              </div>
              <p className="help">Ruolo ricoperto durante il turno</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="panel is-info">
          <p className="panel-heading">
            Straordinari
          </p>
          <div className="panel-block">
            <div className="field">
              <label className="checkbox">
                <input type="checkbox"/>
                Hai fatto straordinari?
              </label>
            </div>
          </div>
          <div className="panel-block">
            <div className="field">
              <label className="label">Numero missione</label>
              <div className="control">
                <input className="input" type="text" placeholder="203******"/>
              </div>
              <p className="help">Numero missione sforo</p>
            </div>
          </div>
          <div className="panel-block">
            <div className="field">
              <label className="label">Ora stimbratura</label>
              <div className="control">
                <input className="input" type="time" placeholder="13:45"/>
              </div>
              <p className="help">Ora in cui si ha terminato il turno</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
