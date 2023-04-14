import React from 'react'
import Experiencecard from '../ExperienceCard/Experiencecard'
import './Workexperience.css'
const Workexperience = () => {
  return (
    <div className="workexperience" id = 'Workexperinece'>
        <div className="awesome w-awesome">
            <span>
                Work Experience
            </span>
        </div>
        <div className='w-cards' >
            <Experiencecard
            Company = {'Societe Generale '}
            location ={'Bangalore, India'}
            yearstart = {'December,2020'}
            yearend = {'July,2022'}
            details = {['Point of contact for GUI development of Europe and Asian regulatory businesses.Developed several functionalities like email and download to increase the speed of regulatory report submission and worked on automating the entire report submission process of PUMA ']}
            />
            <Experiencecard
            Company = {'University of Chicago,Booth School of business'}
            location ={'Chicago,USA'}
            yearstart = {'September,2022'}
            yearend = {'present'}
            details = {['Worked on developing websites that communicate research work of Sendhil Mullainathan and developed survey websites that hepled greatly in data collection for his research work']}

            />
        </div>
    </div>
  )
}

export default Workexperience