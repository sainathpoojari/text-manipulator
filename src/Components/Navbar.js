import React from 'react'
// import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';


function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>

            </ul>
          </div>
          {/* <div className='mx-3'>
          <input className="color1" type="color" name="color1" value="#00ff00"/>
          <label>Backgroundgenrahrefr</label>
        </div> */}
          <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.darkModeBtn} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar;