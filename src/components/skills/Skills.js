import React from 'react'
import './Skills.css'
import js from './assets/js.png'
import react from './assets/react.png'
import scss from './assets/scss.png'
import firebase from './assets/firebase.png'
import material_ui from './assets/material_ui.png'
import github from './assets/github.png'
import redux from './assets/redux.png'
import netlify from './assets/netlify.png'
import emailjs from './assets/emailjs.png'
import formik from './assets/formik.png'
import node_js from './assets/node_js.png'
import express_js from './assets/express_js.png'
import mongo_db from './assets/mongo_db.png'
import mongoose from './assets/mongoose.png'
import next_js from './assets/next_js.png'


import ScrollAnimation from 'react-animate-on-scroll'





const Skills = () => {
    return (
        <div className="skills-container" >
           <ScrollAnimation animateIn="tada" ><h1>My <span className="style-word-span">Skills</span></h1></ScrollAnimation>

            <div className="techs-section-container" >

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3} >
                    <i className="fa fa-html5 fa-5x" aria-hidden="true" style={{ color: "orange" }} ></i>
                    <h4>HTML 5</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <i className="fa fa-css3 fa-5x" aria-hidden="true"></i>
                    <h4>CSS 3</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={js} alt="JavaScript" />
                    </div>
                    <h4>JavaScript</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={react} alt="React" />
                    </div>
                    <h4>React.JS</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={scss} alt="SCSS" />
                    </div>
                    <h4>SCSS</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={firebase} alt="Firebase" />
                    </div>
                    <h4>Firebase</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={material_ui} alt="Material Ui" />
                    </div>
                    <h4>Material UI</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={github} alt="GitHub" />
                    </div>
                    <h4>GitHub</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={netlify} alt="Netlify" />
                    </div>
                    <h4>Netlify</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={redux} alt="Redux" />
                    </div>
                    <h4>Redux</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={formik} alt="Formik" />
                    </div>
                    <h4>Formik</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={emailjs} alt="Email JS" />
                    </div>
                    <h4>Email JS</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={node_js} alt="Node JS" />
                    </div>
                    <h4>Node JS</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={express_js} alt="Node JS" />
                    </div>
                    <h4>Express JS</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={mongo_db} alt="Node JS" />
                    </div>
                    <h4>Mongo DB</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={mongoose} alt="Node JS" />
                    </div>
                    <h4>Mongoose</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={react} alt="React Native" />
                    </div>
                    <h4>React Native</h4>
                    <h4>(Learning)</h4>
                </ScrollAnimation>

                <ScrollAnimation animateIn='tada' className="each-tech-container" duration={1.3}>
                    <div className="tech-image-container" >
                        <img src={next_js} alt="React Native" />
                    </div>
                    <h4>Next JS</h4>
                    <h4>(Learning)</h4>
                </ScrollAnimation>

            </div>
        </div>
    )
}

export default Skills