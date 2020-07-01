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
            <ScrollAnimation animateIn='bounceInUp' >
                <p>
                        I'm a self-taught developer and I posses a firm knowledge of HTML, CSS and JavaScript.
                        I also have a good knowledge on React.Js. Although I'm currently a front end developer
                        I have goals to becoming a Full-Stack developer in the nearest future.
                    
                </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInUp' >
                <p>
                        On a personal level, I am highly-motivated, disciplined, time-oriented, result oriented, self-driven, hard-working,
                        a fast learner and constantly seeking to improve my skills and I'm fully aware of the
                        latest Front-end Development Tools.

                </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInUp' >
                <p>
                        In addition, I have the ability to adapt to any type of team environment, and always willing to learn.
                        I am team oriented and get along with others when working in a group setting.
                        I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                </p>
                </ScrollAnimation>
            </div>

        </div>
    )
}

export default About