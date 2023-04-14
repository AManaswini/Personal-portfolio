import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>manaswiniaitha55@gmail.com</span>
            <div className="f-icons">
                <Github color='white' size='3rem' />
                <Linkedin color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer