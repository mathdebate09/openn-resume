import React from 'react'

//Importing images
import githubImg from '../assets/socials/github.svg'
import linkedinImg from '../assets/socials/linkedin.svg'
import portfolioImg from '../assets/socials/portfolio.svg'
import emailImg from '../assets/socials/email.svg'
import contactImg from '../assets/socials/contact-num.svg'

function HeadingDisplay({name, socialLinks}) {
    return(
        <>
            <h1>{name}</h1>
            <ul className='social-links'>
                <li><a href={'https://github.com/'+socialLinks[0]} target="_blank" rel="noopener noreferrer"><img src={githubImg} alt="Github"/> <span>{socialLinks[0]}</span></a></li>
                <li><a href={'https://www.linkedin.com/in/'+socialLinks[1]} target="_blank" rel="noopener noreferrer"><img src={linkedinImg} alt="LinkedIn"/> <span>{socialLinks[1]}</span></a></li>
                <li><a href={'https://'+socialLinks[2]} target="_blank" rel="noopener noreferrer"><img src={portfolioImg} alt="Portfolio"/> <span>{socialLinks[2]}</span></a></li>
                <li><a href={'mailto:'+socialLinks[3]} target="_blank" rel="noopener noreferrer"><img src={emailImg} alt="Email"/> <span>{socialLinks[3]}</span></a></li>
                <li><a href={'tel:'+socialLinks[4]} target="_blank" rel="noopener noreferrer"><img src={contactImg} alt="Contact"/> <span>{socialLinks[4]}</span></a></li>
            </ul>
        </>
    )
}

export default HeadingDisplay