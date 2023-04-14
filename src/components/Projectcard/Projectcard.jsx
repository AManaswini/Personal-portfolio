import React from 'react'
import './Projectcard.css'
const Projectcard = ({image,orientation,workingurl,githuburl}) => {
  const buttonStyle = {
    marginTop: orientation === "vertical" ? "2.3rem" : "0.25rem"
  };
  return (
    <div className="projectcard">
        <img src={image} alt="" style={buttonStyle}/>
        <div className='buttons' style={buttonStyle}>
            <a href={workingurl}><button className='button button-1'>Click to view</button></a>
            <a href={githuburl}><button className='button button-2'>Source code</button></a>
        </div>
   </div>
  )
}

export default Projectcard