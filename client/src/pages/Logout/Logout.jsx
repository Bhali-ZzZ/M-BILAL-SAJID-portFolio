import React, { useEffect } from 'react'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Logout = () => {

    const navigate = useNavigate()

    const { LogoutUser } = useAuth()

    useEffect(()=>{
        LogoutUser()
        navigate('/login');
        window.location.reload()
       
    },[LogoutUser])



  return (
    <div>
    
    </div>
  )
}

export default Logout
