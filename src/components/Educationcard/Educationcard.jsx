import React from 'react'
import './Educationcard.css'
const Educationcard = ({School, Degree, Course, yearstart, yearend, details}) => {
  return (
    <div className="educationcard">
        <div className='e-info'>
            <span>{Degree}</span>
            <span>{yearstart}-{yearend}</span>
        </div>
        <div className='e-details'>
            <span>{School}</span>
            <span>{Course}</span>
            <span>{details}</span>
        </div>
   </div>
  )
}

export default Educationcard