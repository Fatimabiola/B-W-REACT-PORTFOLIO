
import mpics from '../../assets/mpics.jpg'
import CTA from '../header/CTA'
import Socialicon from './Socialicon'
import Nav from '../nav/Nav'

const Header =()=>{
    return(
        <header className='header'>
            <div className='container header_container'>
                <h2>Hello I'm</h2>
                <h1>Fatimat Wahab</h1>
                <h3 className='text-light'>Front end developer</h3>
                <CTA/>
                
                <div className="me">
                    <img src={mpics} alt="me" />
                </div>
    <Socialicon/>
                <div>
                <a href='#contact' className='scroll-down'>Scroll down</a>
                </div>
            </div>
            <Nav/>      
        </header>
    )
}
export default Header