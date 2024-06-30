import React from 'react'
import './Services.css'
import serviceimg from '../../assets/reg-log-image.png'
import { useAuth } from '../Context/AuthContext'



const Services = () => {

  const {myservices} = useAuth()

 
  return (
    <div>
      <section id='services'>
      <div className='container'>
      <h1 className='service-title'>Services</h1>
      <div className='row'>
        

      {myservices.map((currElem , index)=>{

        const {service , price , provider , description} = currElem

        return (
          <div className='col-lg-4 col-md-6' key={index}>
          <div className='my-services'>
          <div className='service-img'>
            <img src={serviceimg} alt='image'/>
          </div>
          <div className='provider'>
            <p>{provider}</p>
            <p>${price}</p>
          </div>
          <h3>{service}</h3>
          <p className='desc'>{description}</p>
          
        </div>
        </div>
        )
      })}
      </div>
      <br/>
      <hr/>
      </div>
      </section>
    </div>
  )
}

export default Services
