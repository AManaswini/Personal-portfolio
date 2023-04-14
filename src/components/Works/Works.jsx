import React from 'react'
import './Works.css'
const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Technical</span>
            <span>skills</span>
            {/* <span>lorem epsil <br/>llllllll</span> */}
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>

        </div>
    </div>
  )
}

export default Works