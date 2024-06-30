import React, { useEffect, useState } from 'react';
import './Home.css';
import myself from "../../assets/myself.png";
import html from "../../assets/html-icon.png";
import css from "../../assets/css-icon.png";
import js from "../../assets/js-icon.png";
import bootstrap from "../../assets/bootstrap-icon.png";
import react from "../../assets/react-icon.png";
import mongo from "../../assets/mongo-icon.png";
import express from "../../assets/express-icon.png";
import node from "../../assets/node-icon.png";
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';
import mern from '../../assets/mern.png'

const Home = () => {
    const [projects, setProjects] = useState([]);
    const { url } = useAuth();

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${url}/api/projects/data`);
            if (response.data.success) {
                console.log(response.data.myProjects); // Log the fetched projects
                setProjects(response.data.myProjects);
            } else {
                console.log('Data fetch was not successful');
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            {/* ---------------------header----------------------------- */}
            <section id='header'>
                <div className='container text-center'>
                    <div className='image-container'>
                        <img src={myself} alt='image' width="200px" height="300px" />
                        
                    </div>
                  
                    <br />
                    <br />
                    <span className="neon-border">THE MERN-STACK DEVELOPER</span>
               
                    <hr />
                </div>
            </section>
            {/* -----------------------about myself-------------------------------- */}
            <section id='myself'>
            <div className='container'>
            <h1>ABOUT ME</h1>
                <div className='row'>
                <div className='col-md-6 up'>
                <h4>I'M <span>M BILAL SAJID,</span></h4>
                <p>I am a dedicated undergraduate student at COMSATS University Islamabad, Sahiwal Campus, currently in my 6th semester with a CGPA of 3.80/4. As a front-end developer, I have honed my skills in HTML, CSS, JavaScript, Bootstrap, and React. Additionally, I have gained hands-on experience in full-stack development with Node.js, Express, and MongoDB.</p>
                </div>
                <div className='col-md-6 low'>
                    <img src={mern} alt='pic'/>
                </div>
                </div>
                <hr/>
            </div>
            </section>
            {/* ------------------------skills-------------------------------- */}
            <section id='skills'>
                <div className='container'>
                    <h1>SKILLS</h1>
                    <div className='row'>
                        <div className='col-md-6 skill-left'>
                            <div className='leftone'>
                                <img src={html} alt='icon' width="50px" height="50px" />
                                <img src={css} alt='icon' width="50px" height="50px" />
                                <img src={js} alt='icon' width="50px" height="50px" />
                                <img src={bootstrap} alt='icon' width="50px" height="50px" />
                                <img src={react} alt='icon' width="50px" height="50px" />
                                <img src={mongo} alt='icon' width="50px" height="50px" />
                                <img src={express} alt='icon' width="50px" height="50px" />
                                <img src={node} alt='icon' width="50px" height="50px" />
                            </div>
                        </div>
                        <div className='col-md-6 skill-right'>
                            <div className='rightone'>
                                <div className='skl'>
                                    <p>HTML5 : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `98%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {98}%
                                        </div>
                                    </div>
                                </div>
                                <div className='skl'>
                                    <p>CSS3 : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `90%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {90}%
                                        </div>
                                    </div>
                                </div>
                                <div className='skl'>
                                    <p>JAVASCRIPT : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `80%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {80}%
                                        </div>
                                    </div>
                                </div>
                                <div className='skl'>
                                    <p>BOOTSTRAP : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `85%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {85}%
                                        </div>
                                    </div>
                                </div>
                                <div className='skl'>
                                    <p>REACT.JS : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `80%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {80}%
                                        </div>
                                    </div>
                                </div>
                                <div className='skl'>
                                    <p>EXPRESS.JS : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `78%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {78}%
                                        </div>
                                    </div>
                                </div>
                                <div className='skl'>
                                    <p>MONGODB : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `83%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {83}%
                                        </div>
                                    </div>
                                </div>
                                <div className='skl'>
                                    <p>NODE.JS : </p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `90%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {90}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
            {/* -------------completed projects-------------- */}
            <section id='projects'>
                <div className='container'>
                    <h1>COMPLETED PROJECTS</h1>
                    <div className='row'>
                        {projects.map((project) => (
                            <div className='col-md-6 col-lg-4' key={project._id}>
                                <div className='project'>
                                    <h6>{project.name}</h6>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr/>
                </div>
            </section>
        </div>
    );
};

export default Home;
