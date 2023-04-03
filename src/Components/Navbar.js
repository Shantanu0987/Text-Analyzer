import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom' 

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}
      </a>
      <div className="form-check form-switch my-2 mx-2">
  <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}` } htmlFor="flexSwitchCheckDefault" onClick={props.toggle}>Enable Dark/Light mode</label>
</div>
<div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height:"20px",width:'20px'}}></div>
<div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height:"20px",width:'20px'}}></div>
<div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode("success")}} style={{height:"20px",width:'20px'}}></div>
<div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height:"20px",width:'20px'}}></div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
         {/* <Link className="nav-link" to="/about">About</Link> */}
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}

Navbar.propTypes = {
  title : propTypes.string.isRequired
}


