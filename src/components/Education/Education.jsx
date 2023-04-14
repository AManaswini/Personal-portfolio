import React from 'react'
import Educationcard from '../Educationcard/Educationcard'
import './Education.css'
const Education = () => {
  return (
    <div className="education" id='Education'>
        <div className="awesome e-awesome">
            <span>
                Education
            </span>
        </div>
        <div className='e-cards' >
            <Educationcard
            School = {'University of Chicago'}
            Degree ={'Masters'}
            Course = {'Masters of Science in Compuster Science'}
            yearstart = {'2022'}
            yearend = {'2023'}
            details = {'Courses - Algorithms,Python Programming,Databases,Cloud computing,IOS Development,Computer Security, Applied Data Analysis, Distributed Systems, Human Computer Interaction'}
            />

            <Educationcard
            School = {'Visvesvaraya National Institute of Technology'}
            Degree ={'Bachelors'}
            Course = {'Bachelors of Technology in Electronics and Communication Engineering'}
            yearstart = {'2016'}
            yearend = {'2020'}
            details = {'Courses - Concepts of Operating Systems,Digital Logic Design,Microprocessors and Interfacing,Hardware Description languages,Embedded Systems'}
            />
        </div>
    </div>
  )
}

export default Education