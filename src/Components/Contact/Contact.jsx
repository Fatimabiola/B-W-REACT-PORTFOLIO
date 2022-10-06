import React, {useRef}from 'react'
// import axios from 'axios'
import {AiFillMail} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import emailjs from '@emailjs/browser'

 const Contact = () => {
    
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qivgbbe', 'template_r2tg83v', form.current, '486CORd_qQwobRv50')
       
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

   
 
  return (
    <section id='contact'>
      <h1 className='my-contact'>Contact</h1>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <AiFillMail className='icon-class'/>
            <h4>Email</h4>
            <h5>fatimatyewandewahab@gmail.com</h5>
            <a href="mailto:fatimatyewandewahab@gmail" target="_blank">Send Message</a>
          </article>

          <article className='contact-option'>
            <FaWhatsappSquare className='icon-class'/>
            <h4>WhatsApp</h4>
            <h5>+234-703-607-4909</h5>
            <a href="https://api.whatsapp.com/send?phone=2347036074909" target="_blank">Send Message</a>
          </article>

          <article className='contact-option'>
            <AiFillMessage className='icon-class'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/fatimatabiola.wahab" target="_blank">Send Message</a>
          </article>
        </div>

       
      

        <form ref={form} onSubmit={sendEmail} >
            <input 
            type='text' name="name" id='name'placeholder='Full Name'
            required/>
            <input 
            type='email' name="email" id='email' placeholder='abiola@outlook.com' required/>
            <input type="text" id='text' name="subject" placeholder='Subject' required />
            <textarea 
            type='text' name="message"  id='message' row="7" placeholder='compose your message' required/>
            <button type='submit' className='btn btn-primary'> Send Message</button>
          </form>
      </div>
    </section>
  )
        
        }
export  default Contact