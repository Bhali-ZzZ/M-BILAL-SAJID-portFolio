import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

export const AuthContext = createContext()

export const url = "http://localhost:4000"

export const AuthProvider = ({children})=>{ 

    const [token , setToken] = useState(localStorage.getItem("token"))

    const [user,setUser] = useState(null)

    const [myservices , setMyServices] = useState([])

    const authorizationToken = `Bearer ${token}`

    const storeTokenInLS = (serverToken)=>{
        localStorage.setItem("token",serverToken)
    }

    const isLoggedIn = !!token

    const LogoutUser = ()=>{
        setToken("")
        localStorage.removeItem("token")
    }

    const userAuthentication = async()=>{

        try {
            const response = await axios.get(`${url}/api/user/userAuth`,
            {headers:{Authorization:authorizationToken}})

            if(response.data.success){
                setUser(response.data.userFromDB)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const fetchServices = async ()=>{
       try {
        const response = await axios.get(`${url}/api/services/data`)
        
        if(response.data.success){
            setMyServices(response.data.message)
        } else {
            console.log(error)
        }
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(()=>{
        fetchServices()
        userAuthentication()
    },[])

    return (
        <AuthContext.Provider value={{user,isLoggedIn,storeTokenInLS,LogoutUser,myservices,authorizationToken, url}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}
