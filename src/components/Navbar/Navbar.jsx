import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    // <div className='navbar'>
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Manaswini Aitha</div>
                {/* <span>toggle</span>  */}
                {/* <Toggle/> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='Navbar' smooth = {true} activeClass = 'activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth = {true} >
                        <li>Skills</li>
                        </Link>
                        <Link spy={true} to='Certifications' smooth = {true} >
                        <li>Certifications</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth = {true} >
                        <li>Projects</li>
                        </Link>
                        <Link spy={true} to='Workexperinece' smooth = {true} >
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Education' smooth = {true} >
                        <li>Education</li>
                        </Link>
                        <Link spy={true} to='Contact' smooth = {true}>
                        <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                {/* <button className="button n-button">Contact me</button> */}
            </div>
        </div>

    // </div>
  )
}

export default Navbar
