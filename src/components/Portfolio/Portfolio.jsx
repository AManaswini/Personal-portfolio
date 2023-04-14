import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
// import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import project1 from '../../img/project1.png'
import project2 from '../../img/project2.png'
import project3 from '../../img/project3.png'
import project4 from '../../img/project4.png'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Card from '../Card/Card'
import Projectcard from '../Projectcard/Projectcard'
const Portfolio = () => {
  return (
   <div className="portfolio" id='Portfolio'>
    <span>
        Projects
    </span>
    {/* <Swiper modules={[Navigation, Pagination, Scrollbar]} spaceBetween={30} slidesPerView={2} grabCursor={true} className='portfolio-slider'>
        <SwiperSlide>
            <Projectcard
            image = {Ecommerce}
            workingurl = {'https://github.com/'}
            githuburl = {"https://github.com/"}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Projectcard
            image = {Ecommerce}
            workingurl = {'https://github.com/'}
            githuburl = {"https://github.com/"}
            />
        </SwiperSlide><SwiperSlide>
            <Projectcard
            image = {Ecommerce}
            workingurl = {'https://github.com/'}
            githuburl = {"https://github.com/"}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Projectcard
            image = {Ecommerce}
            workingurl = {'https://github.com/'}
            githuburl = {"https://github.com/"}
            />
        </SwiperSlide>

    </Swiper> */}
    {/* projects */}
    <div className='projects'>
        <Projectcard
        image = {project1}
        orientation = {'horizontal'}
        workingurl = {'http://faceseffect.s3-website.us-east-2.amazonaws.com/home'}
        githuburl = {"https://github.com/AManaswini/Faceseffect"}
        />

        <Projectcard
        image = {project2}
        orientation = {'horizontal'}
        workingurl = {'http://faces-survey-3.s3-website-us-east-1.amazonaws.com/'}
        githuburl = {"https://github.com/AManaswini/FacesSurvey"}
        />

        <Projectcard
        image = {project3}
        orientation = {'vertical'}
        workingurl = {'https://drive.google.com/file/d/1BjQkV38fbbCsKDyjbsVp5TE39R0Bf_U4/view?usp=sharing'}
        githuburl = {"https://github.com/AManaswini/PlanYourTrip"}
        />
    </div>
    <div className='projects'>
        <Projectcard
        image = {project4}
        workingurl = {'https://drive.google.com/file/d/1DBPHmaYI__L77andBcTyUm_PLMETrD0S/view?usp=sharing'}
        githuburl = {"https://github.com/AManaswini/PlanYourTrip"}
        />

        {/* <Projectcard
        image = {Ecommerce}
        workingurl = {'https://github.com/'}
        githuburl = {"https://github.com/"}
        />

        <Projectcard
        image = {Ecommerce}
        workingurl = {'https://github.com/'}
        githuburl = {"https://github.com/"}
        /> */}
    </div>
   </div>
  )
}

export default Portfolio