import React from 'react'
import './App.css'
import HomePage from './components/home/HomePage'
import NavBar from './components/navbar/NavBar'
import { Element } from 'react-scroll'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Articles from './components/articles/Articles'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Element name="homesection" >
        <HomePage />
      </Element>

      <Element name="aboutsection" >
        <About />
      </Element>

      <Element name="skillsection">
        <Skills />
      </Element>

      <Element name="projectsection" >
        <Projects />
      </Element>
      
      <Element name="articlesection" >
        <Articles />
      </Element>

      <Element name="contactsection" >
        <Contact />
      </Element>


      <Footer />

    </div>
  );
}

export default App;
