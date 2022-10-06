import React from 'react'
import './index.css'
import './indextwo.css'
import Header from './Components/header/Header.jsx'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/services/Services'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'

  function App () {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
  }

export default App
