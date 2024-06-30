import React from 'react'
import './AdminLayout.css'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <div className='container admin-layout'>
        <ul>
           <li><NavLink to="/admin/users">Users</NavLink></li> 
           <li><NavLink to="/admin/contacts">contacts</NavLink></li> 
           <li><NavLink to="/services">services</NavLink></li> 
           <li><NavLink to="/">home</NavLink></li> 
        </ul>
      </div>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
