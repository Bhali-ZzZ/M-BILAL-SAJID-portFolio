import React, { useState, useEffect } from 'react';
import './Contact.css';
import regimg from '../../assets/reg-log-image.png';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify'

const Contact = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { user , url } = useAuth();
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData && user) {
      setContact({
        name: user.name,
        email: user.email,
        message: ''
      });
      setUserData(false);
    }
  }, [user, userData]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await axios.post(`${url}/api/form/contact`, contact);
      if (response.data.success) {
        setContact({
          name: '',
          email: '',
          message: ''
        })
        toast.success("Message sent successfully")
      } else {
        toast.success("Error occured")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <img src={regimg} alt="image" />
          </div>
          <div className="col-md-6 right">
            <h1>Contact Form</h1>
            <form onSubmit={submitHandler}>
              <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input
                  onChange={changeHandler}
                  type="text"
                  placeholder="Username"
                  name="name"
                  required
                  autoComplete="off"
                  value={contact.name}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="email">Email</label>
                <input
                  onChange={changeHandler}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  autoComplete="off"
                  value={contact.email}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="message">Message</label>
                <textarea
                  onChange={changeHandler}
                  placeholder="Enter message"
                  name="message"
                  required
                  value={contact.message}
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <hr/>
      </div>
    </section>
  );
};

export default Contact;
