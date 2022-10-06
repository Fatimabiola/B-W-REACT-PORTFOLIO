import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter}from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'

function Footer (){
    return(
        <footer id='footer'>
           <div className='footer-socials'>
                 <a  href='http://www.linkedin.com/in/fatimat-wahab-070491b7'  className='icons' target="_blank"><BsLinkedin/></a>
                <a  href='https://github.com/Fatimabiola'  className='icons' target="_blank"><BsGithub/></a>
                 <a  href='http://twitter.com/phatimatwahab20?t=naqBOwti5hsiiGwAvBS3aw&s=08' className='icons' target="_blank"><BsTwitter/></a>
                 <a href="https://api.whatsapp.com/send?phone=2347036074909" target="_blank" className='icons'> <FaWhatsappSquare/></a>
        </div>
            <div className='footer-copyright'>&copy; All right reserved</div>
  

        </footer>
    )
}
export default Footer