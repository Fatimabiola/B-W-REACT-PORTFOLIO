import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter}from 'react-icons/bs'
function Socialicon() {
  return (
    <div className='header-social'>
        <a  href='http://www.linkedin.com/in/fatimat-wahab-070491b7'  className='icons' target="_blank"><BsLinkedin/></a>
        <a  href='https://github.com/Fatimabiola'  className='icons' target="_blank"><BsGithub/></a>
        <a  href='http://twitter.com/phatimatwahab20?t=naqBOwti5hsiiGwAvBS3aw&s=08' className='icons' target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default Socialicon