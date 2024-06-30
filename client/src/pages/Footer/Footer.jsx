import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
             
        {/* ---------------footer------------------- */}
        <section id='footer'>   
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-4 footer-left'>
                                <h2>GET IN <span>TOUCH</span></h2>
                                <p>React developer dedicated to crafting seamless user experiences. Reach out to start a project!</p>
                                <div className='social-icons'>
                               <a href='https://www.linkedin.com/in/muhammad-bilal-sajid' target='blank'> <FaLinkedin/></a>
                               <a href='https://www.instagram.com/_b_h_a_l_i_/'> <FaInstagram/></a>
                                <a href='https://github.com/Bhali-ZzZ'><FaGithub/></a>
                                <a href='https://www.facebook.com/mbilal.sajid.73'><FaFacebookSquare/></a>
                                </div>
                            </div>
                         <div className='col-lg-6 col-md-4 footer-right'>
                         <div>
                             <div className='footer-box-parent'>
                             <div className='footer-box'>
                                    <CiMail/>
                                    <p>bilalxd512@gmail.com</p>
                                </div>
                             </div>
                            </div>
                            <div className='col-md-3'>
                            <div className='footer-box-parent'>
                            <div className='footer-box'>
                                <CiPhone/>
                                <p>+923366503733</p>
                            </div>
                            </div>
                            </div>
                         </div>
                        </div>
                    </div>
            </section>
    </div>
  )
}

export default Footer
