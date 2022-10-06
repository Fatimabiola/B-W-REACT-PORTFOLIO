import React from 'react'
import mydp from '../../assets/mydp.jpg'
import AboutCTA from '../about/AboutCTA'
import {FaAward} from 'react-icons/fa'
import {FaPeopleArrows} from 'react-icons/fa'
import {FaProjectDiagram} from 'react-icons/fa'


 function About ()  {
  return (
    <section id='about'>
      <h1 className='aboutmee'>About Fatima</h1>
    
      <div className=" about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={mydp} alt="mydp"/>
          </div>
        </div>

        <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h3>Experience</h3>
            <small>1+ years working experience</small>
          </article>
        
          <article className='about_card'>
            <FaPeopleArrows className='about_icon'/>
            <h3>Client</h3>
            <small>In progress</small>
          </article>
          
             <article className='about_card'>
              <FaProjectDiagram className='about_icon'/>
             <h3>Project</h3>
             <small>4+ completed project</small>
          </article>    
           </div>
      <p className='about_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam obcaecati natus velit, voluptates cupiditate exercitationem praesentium voluptate nulla blanditiis quam dolores eligendi, enim ad quia laboriosam illo perspiciatis? Est.</p>
      <AboutCTA/>

      </div>
      </div>
      
      
    </section>
  )
}
export default About