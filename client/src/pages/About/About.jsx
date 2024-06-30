import React from 'react';
import './About.css';
import { useAuth } from '../Context/AuthContext';
import aboutimg from "../../assets/about-img.png";

const About = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="about">
        <div className="container">
          {user ? (
            <p className="owner-welcome">
              Welcome <span>{user.name}</span>, to our website
            </p>
          ) : (
            <p className="owner-welcome">Welcome to our website</p>
          )}
          <h1>Why choose us?</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="about-me">
                <ul>
                  <li><b>Skilled Frontend Development: </b>As a dedicated frontend developer, I specialize in creating visually appealing and user-friendly web interfaces using React.js</li>
                  <li><b>Growing MERN Stack Proficiency: </b>With a strong foundation in the MERN stack (MongoDB, Express, React, Node.js), I am continuously enhancing my skills to deliver robust and dynamic web applications.</li>
                  <li><b>Data Integration: </b>I excel at integrating data fetching and retrieval in web applications, ensuring seamless interaction between the frontend and backend. By leveraging APIs, I can dynamically load and display data, providing users with real-time updates and an enhanced interactive experience.</li>
                  <li><b>Support and Maintenance: </b>My services don't end with the launch of your website. I offer ongoing support and maintenance to keep your site up-to-date, secure, and performing at its best.</li>
                  <li><b>Cost-Effective Services: </b>I offer competitively priced services that provide excellent value for your investment. By working efficiently and effectively, I ensure that you receive high-quality solutions without exceeding your budget.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-image">
                <img src={aboutimg} alt="About" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/* ----------------location------------- */}
      <section id="location">
        <div className="container">
          <h1>Current Location</h1>
          <div className="row text-center">
            <div className="location">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.7278824214395!2d73.14653207426133!3d30.64162569003237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e4dde0c501%3A0xc37ea3d85326203!2sCOMSATS%20University%20Islamabad%20-%20Sahiwal%20Campus!5e0!3m2!1sen!2s!4v1709389139630!5m2!1sen!2s"
                width="900" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <br/>
          <hr/>
        </div>
      </section>
    </div>
  );
};

export default About;
