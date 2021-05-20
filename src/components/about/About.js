import React from 'react'
import './About.css'
import ScrollAnimation from 'react-animate-on-scroll'
import AOS from 'aos'

const About = () => {
    AOS.init();
    return (
        <div className="about-container" >
          <ScrollAnimation animateIn="tada" ><h1>About <span className="style-word-span" >Me</span></h1></ScrollAnimation> 

            <div className="about-information"  >
            <ScrollAnimation animateIn='tada' >
                <p>
                        Hello, my name is Olaniran Sulaimon, I'm from Nigeria and a Web Developer. I posses a firm knowledge of HTML, CSS and JavaScript.
                        I have a good knowledge on frameworks and liberies which are React.Js, Node.Js and Express.JS. I also have a good knowledge 
                        in MongoDb and with these I'm able to build Front-End applications using React.Js and Full Stack applications using the MERN Stack. 
                        I am currently looking for roles as a Front-End developer or Full-Stack MERN developer with opportunities to learn more technologies and 
                        improve on my current skills.
                    
                </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='tada' >
                <p>
                        I've built some personal projects which are listed below on this portfolio website which I also built myself and I've
                        contributed to a few open source projects on Github which are also listed below.
                        On a personal level, I am highly-motivated, disciplined, time-oriented, result oriented, self-driven, hard-working,
                        a fast learner and constantly seeking to improve my skills and I'm fully aware of the
                        latest Front-end Development Tools and always willing to learn them when neccessary.

                </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='tada' >
                <p>
                        In addition, I'm willing to relocate and I have the ability to adapt to any type of team environment, and always willing to learn.
                        I am team oriented and get along with others when working in a group setting.
                        I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                </p>
                </ScrollAnimation>
            </div>

        </div>
    )
}

export default About