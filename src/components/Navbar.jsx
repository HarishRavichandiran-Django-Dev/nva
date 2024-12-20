// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container d-flex justify-content-center">
    <a className="navbar-brand mx-3" href="#">
          <img src={logo} alt="Logo" className='rounded' style={{ width:'100px',height: '40px' }} /> {/* Set height as needed */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Virtual lab</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">English(EN)</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
