import React, { useState } from 'react'
import './Registeration.css'
import regimg from '../../assets/reg-log-image.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../Context/AuthContext'

const Registeration = () => {

  const navigate = useNavigate()
  const {url} = useAuth()

  const [regUser , setRegUser] = useState({
    name: "",
    email : "",
    phone : "",
    password : ""
  })

  const changeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setRegUser({...regUser,[name]:value})
  }



  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(regUser)

  try {
    const response = await axios.post(`${url}/api/user/userRegister`, regUser);
    if(response.data.success){
      setRegUser({
        name: "",
    email : "",
    phone : "",
    password : ""
      })
      console.log('Token:', response.data.token);
      navigate("/login")
      toast.success("Registered")
     
    }
    
    else{
      toast.error("Error")
    }
 
  } catch (error) {
    console.log(error)
    toast.error("Error occured,please try again")
  }
  }
  
  


  return (
    <section id='registeration'>
      <div className='container'>
      <div className='row'>
        <div className='col-md-6 left'>
        <img src={regimg} alt='image'/>
        </div>
        <div className='col-md-6 right'>
        <h1>Registeration Form</h1>
        <form onSubmit={submitHandler}>
          <div className='form-inputs'>
          <label htmlFor='username'>Username</label>
          <input onChange={changeHandler} type='text' placeholder='Username' name='name' required autoComplete="off" value={regUser.name} />
          </div>
          <div className='form-inputs'>
          <label htmlFor='email'>Email</label>
          <input onChange={changeHandler} type='email' placeholder='Enter email' name='email' required autoComplete="off" value={regUser.email} />
          </div>
          <div className='form-inputs'>
          <label htmlFor='Phone'>Phone No.</label>
          <input onChange={changeHandler} type='number' placeholder='Enter phone No.' name='phone' required autoComplete="off" value={regUser.phone}/>
          </div>
          <div className='form-inputs'>
          <label htmlFor='Password'>Password</label>
          <input onChange={changeHandler} type='password' placeholder='Enter password' name='password' required autoComplete="off" value={regUser.password}/>
          </div>
          <button type='submit'>Register now</button>
        </form>
        </div>
      </div>
      <br/>
      <hr/>
      </div>
    </section>
  )
}

export default Registeration
