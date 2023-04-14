import React from 'react'
import'./Services.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import python from '../../img/python.webp'
const Services = () => {
  return (
    <div className="services" id='Services'>
        <div className="awesome">
            <span>Technical</span>
            <span>skills</span>
            {/* <span>lorem epsil <br/>llllllll</span> */}
            <a href={Resume} download><button className="button s-button">Download resume</button></a>
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>

        </div>
        <div className="cards">
            <div className='cards-1'>
                <div className='cards-1-left'>
                    {/* first card */}
                    {/* style={{left:'-2rem'}} */}
                    <div>
                        <Card
                        emoji = {heartemoji}
                        heading = {'Programming languages'}
                        detail = {"C,Java,Python"}
                        />
                    </div>

                    {/* second card */}
                    {/* style={{left:'12rem'}} */}
                    <div >
                        <Card
                        emoji = {heartemoji}
                        heading = {'Web development'}
                        detail = {"HTML, CSS, Angular, Javascript, React, Typescript"}
                        />
                    </div>
                </div>
                
                <div className='cards-1-right'>
                    {/* third card */}
                    {/* style={{left:'26rem'}} */}
                    <div>
                        <Card
                        emoji = {heartemoji}
                        heading = {'Databases'}
                        detail = {"SQL, Redis, MongoDB, Elastic Search"}
                        />
                    </div> 

                    {/* forth card */}
                    {/* style={{left:'40rem'}} */}
                    <div >
                        <Card
                        emoji = {heartemoji}
                        heading = {'ETL'}
                        detail = {"Informatica"}
                        />
                    </div>
                </div>   
            </div>
            {/* fifth card */}
            {/* style={{left:'-2rem', top:'14rem'}} */}
            <div className='cards-2'>
                <div className='cards-2-left'>
                    <div >
                        <Card
                        emoji = {heartemoji}
                        heading = {'IOS developer'}
                        detail = {"Swift, SwiftUI, XCode"}
                        />
                    </div>

                    {/* sixth card */}
                    {/* style={{left:'12rem',top:'14rem',}} */}
                    <div >
                        <Card
                        emoji = {heartemoji}
                        heading = {'DataScience'}
                        detail = {"Machine Learning"}
                        />
                    </div>
                </div>
                {/* seventh card */}
                {/* style={{top:'14rem', left:'26rem'}} */}
                <div className='cards-2-right'>
                    <div >
                        <Card
                        emoji = {heartemoji}
                        heading = {'Cloud'}
                        detail = {"AWS"}
                        />
                    </div>
                    
                    {/* eighth card */}
                    {/* style={{left:'40rem',top:'14rem',}} */}
                    <div >
                        <Card
                        emoji = {heartemoji}
                        heading = {'Other skills'}
                        detail = {"Maven, Spring framework, HTTP, .NET, Node jS, Figma, TDD, Git, Agile, Linux, MATLAB, Docker"}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Services