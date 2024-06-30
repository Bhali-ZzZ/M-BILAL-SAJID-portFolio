import React , { useState } from 'react'
import './Login.css'
import regimg from '../../assets/reg-log-image.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { toast } from 'react-toastify'


const Login = () => {


    const navigate = useNavigate()
    const {storeTokenInLS} = useAuth()

    const [user , setUser] = useState({
      email : "",
      password : ""
    })
    const changeHandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setUser({...user,[name]:value})
    }

      
    const submitHandler = async (e) => {
      e.preventDefault();
      console.log(user);
    
      try {
        const response = await axios.post("http://localhost:4000/api/user/userLogin", user);
    
        if (response.data.success) {
          // Clear user input fields
          setUser({
            email: "",
            password: ""
          });
    
     
          toast.success("Login Successful");
    
          storeTokenInLS(response.data.token);
    
   
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 2000);
        } else {
          toast.error("invalid email or password");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    };
    
      
   
   


  return (
    <section id='login'>
      <div className='container'>
      <div className='row'>
        <div className='col-md-6 left'>
        <img src={regimg} alt='image'/>
        </div>
        <div className='col-md-6 right'>
        <h1>Login Form</h1>
        <form onSubmit={submitHandler}>
          <div className='form-inputs'>
          <label htmlFor='email'>Email</label>
          <input onChange={changeHandler} type='email' placeholder='Enter email' name='email' required autoComplete="off" value={user.email}/>
          </div>
          <div className='form-inputs'>
          <label htmlFor='Password'>Password</label>
          <input onChange={changeHandler} type='password' placeholder='Enter password' name='password' required autoComplete="off" value={user.password}/>
          </div>
          <button type='submit'>Login</button>
        </form>
        </div>
      </div>
      <hr/>
      </div>
    </section>
  )
}

export default Login
