import './Nav.css'
import { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import {MdContactPage} from 'react-icons/md'

function Nav () {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href="#" className={activeNav === '#' ? 'active' : ''}  onClick={() => setActiveNav('#')} ><AiFillHome className='nav-icons'/></a>
     <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav ==='#about' ? 'active' : ''}> <AiOutlineUser className='nav-icons'/></a>
     <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}  onClick={() => setActiveNav('#experience')}> <BsFillBookFill className='nav-icons'/></a>
     <a href="#services" className={activeNav === '#services' ? 'active' : ''}  onClick={() => setActiveNav('#services')}> <MdDesignServices className='nav-icons'/></a>
     <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}  onClick={() => setActiveNav('#contact')}> <MdContactPage className='nav-icons'/></a>
      

    </nav>
  )
}

export default Nav