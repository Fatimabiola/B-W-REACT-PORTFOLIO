
import {FaHtml5} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaNode} from 'react-icons/fa'
function Experience () {
  return (
    <section id='experience'>
      <h1 className='my_experience'>My Experience</h1>

          {/* frontend */}
      <div className="container experience_container">
        <div className="experience_frontend">
          <h2>Font End Development</h2>
            <div className="experience_content">
              <article className='expereince_details'>
                  <FaHtml5 className="experience_icon"/>
                  <h3>HTML</h3>
                  <small>Experienced</small>
             </article>

             <article className='expereince_details'>
                  <SiCss3 className="experience_icon"/>
                  <h3>CSS</h3>
                  <small>Experienced</small>
             </article>

             <article className='expereince_details'>
                  <SiTailwindcss className="experience_icon"/>
                  <h3>TailWind</h3>
                  <small>Beginner</small>
             </article>

             <article className='expereince_details'>
                  <IoLogoJavascript className="experience_icon"/>
                  <h3>JavaScript</h3>
                  <small>Intermediate</small>
             </article>

             <article className='expereince_details'>
                  <FaReact className="experience_icon"/>
                  <h3>React</h3>
                  <small>Beginner</small>
             </article>

             <article className='expereince_details'>
                  <FaBootstrap className="experience_icon"/>
                  <h3>Bootstrap</h3>
                  <small>Experienced</small>
             </article>
           </div>
        </div>

            {/* backend */}
           <div className="experience_frontend">
              <h2>Back End Development</h2>
                <div className="experience_content">

                  <article className='expereince_details'>
                  <FaNode className="experience_icon"/>
                      <h3>Node.Js</h3>
                      <small>Beginner</small>
                  </article>

                  <article className='expereince_details'>
                  <IoLogoJavascript className="experience_icon"/>
                  <h3>JavaScript</h3>
                  <small>Beginner</small>
             </article>
                 </div>
           </div>
        
      </div>
    </section>
  )
}

export default Experience