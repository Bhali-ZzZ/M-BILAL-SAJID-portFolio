import React from 'react'
import './Error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section id='error-page'>
      <div className='container'>
        <div className='error'>
        <h1>404</h1>
        <h5>Sorry! page not found</h5>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className='my-btn'>
          <NavLink className="buttons" to="/">Return Home</NavLink>
          <NavLink className="buttons" to="/contact">Report Problem</NavLink>
        </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Error
