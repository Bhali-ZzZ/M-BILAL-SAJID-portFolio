import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../pages/Context/AuthContext';

const Navbar = () => {

  const {isLoggedIn} = useAuth()

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbaar">
      <div className="container-fluid container">
        <NavLink className="navbar-brand logo" to="/">BHALI</NavLink>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <nav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              {isLoggedIn ? 
                <li className="nav-item">
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
              </li> : 
                <>
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/registeration">Registration</NavLink>
              </li>
                </>
              }
             
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
