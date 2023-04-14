import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

    const form = useRef();
    const [done,setDone] =useState(false)
    const [error,SetError] =useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lycmab6', 'template_806vdxm', form.current, 'PHhHKPr_lRRUomWsT')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log('error')
            console.log(error.text);
            SetError(true)
        });
    };

  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
        <div className="awesome c-awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            {/* <span>lorem epsil <br/>llllllll</span> */}
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
        </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user-name' className='user' placeholder='Name' />
                <input type="email" name='user-email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{done&&"Thanks for contacting me!"}</span>
                {/* <span>{setDone&&"Unable to send the email,please send the email through your gmail"}</span> */}
            </form>
        </div>
    </div>
  )
}

export default Contact