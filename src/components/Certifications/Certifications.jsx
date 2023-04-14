import React from 'react'
import './Certifications.css'
import Certificatecard from '../Certificatecard/Certificatecard'
const Certifications = ({title,details}) => {
  return (
    <div className="certifications" id='Certifications'>
        <div className="awesome">
            <span>
                Certifications
            </span>
        </div>
        <div className ='c-cards'>
            <Certificatecard
            title = {'Supervised Machine Learning: Regression and Classification'}
            provider = {'Stanford and DeepLearning.AI'}
            detail = {'Studied a broad overview of Machine Learning along with Supervised and Unsupervised learning'}
            url = {'https://www.coursera.org/account/accomplishments/certificate/4JFJE2LFPB7E'}
            />
             <Certificatecard
            title = {'Advanced Learning Algorithms'}
            provider = {'Stanford and DeepLearning.AI'}
            detail = {'Studied Neural Networks, Multiclass classification, Activation Functions, Cross validation, Decision trees and purity, Regression trees, Tree Ensembles, Random Forest'}
            url = {'https://www.coursera.org/account/accomplishments/certificate/M84MGJLNH6GS'}
            />
        </div>
    </div>
  )
}

export default Certifications