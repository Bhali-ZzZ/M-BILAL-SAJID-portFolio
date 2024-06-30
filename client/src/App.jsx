import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services'
import Login from './pages/Login/Login'
import Registeration from './pages/Registeration/Registeration'
import Error from './pages/Error/Error'
import Logout from './pages/Logout/Logout'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from './Components/AdminLayout/AdminLayout'
import AdminUsers from './pages/AdminUsers/AdminUsers'
import AdminContacts from './pages/AdminContacts/AdminContacts'
import Footer from './pages/Footer/Footer'


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registeration' element={<Registeration/>}/>
          <Route path='*' element={<Error/>} />
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='users' element={<AdminUsers/>}/>
            <Route path='contacts' element={<AdminContacts/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
