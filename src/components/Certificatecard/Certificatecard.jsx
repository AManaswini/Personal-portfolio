import React from 'react'
import './Certificatecard.css'
const Certificatecard = ({title,detail,provider, url}) => {
  return (
    <div className="certificatecard">
    {/* <img src={emoji} alt="" /> */}
      <span style={{width:'100%',height:'3.5rem'}}>{title}</span>
      <span>{provider}</span>
      <span>{detail}</span>
      <a href= {url}><button className='button'>View certificate</button></a>
   </div>
  )
}

export default Certificatecard