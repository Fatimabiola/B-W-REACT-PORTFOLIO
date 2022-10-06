import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'


const Services = () => {
  return (
    <section id='services'>
      <h1 className="my-service">Services</h1>
      <div className="container service-container">
        <article className='service'>
          <div className="service-header">
            <h3>UI/UX DESIGN</h3>
          </div>
          <ul className='service-list'>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>

        </article>
        {/* second div */}

        <article className='service'>
          <div className="service-header">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service-list'>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>

        </article>
        {/* third article */}

        <article className='service'>
          <div className="service-header">
            <h3>GRAPHICS DESIGN</h3>
          </div>
          <ul className='service-list'>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <AiOutlineCheck className="service-list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services