import React from 'react'
import './About.css'
import js from './assets/js.png'
import react from './assets/react.png'
import scss from './assets/scss.png'
import firebase from './assets/firebase.png'
import material_ui from './assets/material_ui.png'
import github from './assets/github.png'


const About = () => {
    return (
        <div className="about-container" >
            <h1>About <span className="style-me-span" >Me</span></h1>

            <div className="about-information" >
                <p>
                    I'm a self-taught developer and I posses a firm knowledge of HTML, CSS and JavaScript.
                    I also have a good knowledge on React.Js. Although I'm currently a front end developer
                    I have goals to becoming a Full-Stack developer in the nearest future.
                </p>
                <p>
                    On a personal level, I am highly-motivated, disciplined, time-oriented, result oriented, self-driven, hard-working,
                    a fast learner and constantly seeking to improve my skills and I'm fully aware of the
                    latest Front-end Development Tools.
                </p>

                <p>
                    In addition, I have the ability to adapt to any type of team environment, and always willing to learn.
                    I am team oriented and get along with others when working in a group setting.
                    I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                </p>
            </div>

            <h3>Below are Technologies I've worked with</h3>

            <div className="techs-section-container" >
                <div className="each-tech-container" >
                    <i className="fa fa-html5 fa-5x" aria-hidden="true" style={{ color: "orange" }} ></i>
                    <h4>HTML 5</h4>
                </div>

                <div className="each-tech-container" >
                    <i className="fa fa-css3 fa-5x" aria-hidden="true"></i>
                    <h4>CSS 3</h4>
                </div>

                <div className="each-tech-container" >
                    <div className="tech-image-container" >
                        <img src={js} alt="JavaScript" />
                    </div>
                    <h4>JavaScript</h4>
                </div>

                <div className="each-tech-container" >
                    <div className="tech-image-container" >
                        <img src={react} alt="React" />
                    </div>
                    <h4>React.JS</h4>
                </div>

                <div className="each-tech-container" >
                    <div className="tech-image-container" >
                        <img src={scss} alt="SCSS" />
                    </div>
                    <h4>SCSS</h4>
                </div>

                <div className="each-tech-container" >
                    <div className="tech-image-container" >
                        <img src={firebase} alt="Firebase" />
                    </div>
                    <h4>Firebase</h4>
                </div>

                <div className="each-tech-container" >
                    <div className="tech-image-container" >
                        <img src={material_ui} alt="Material Ui" />
                    </div>
                    <h4>Material UI</h4>
                </div>

                <div className="each-tech-container" >
                    <div className="tech-image-container" >
                        <img src={github} alt="GitHub" />
                    </div>
                    <h4>GitHub</h4>
                </div>

            </div>
        </div>
    )
}

export default About