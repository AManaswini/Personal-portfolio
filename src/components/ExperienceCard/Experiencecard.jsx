import React from 'react'
import './Experiencecard.css'
const Experiencecard = ({Company, location, yearstart, yearend, details}) => {
  return (
    <div className="experiencecard">
        <div className='ex-info'>
            <span>{Company}</span>
            <span>{yearstart}-{yearend}</span>
            {/* <span>{location}</span> */}
        </div>
        
        <ul className='ex-details' style={{listStyleType:'none'}}>
            {details.map((item, index) => (
                <li className='item' key={index}>{item}</li>
            ))}
        </ul>
   </div>
  )
}

export default Experiencecard