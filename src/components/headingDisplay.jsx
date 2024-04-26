import React from 'react'

//Importing images
import githubImg from '../assets/socials/github.svg'
import linkedinImg from '../assets/socials/linkedin.svg'
import portfolioImg from '../assets/socials/portfolio.svg'
import emailImg from '../assets/socials/email.svg'
import contactImg from '../assets/socials/contact-num.svg'

function HeadingDisplay({name, socialLinks}) {
    return(
        <div className='heading-main'>
            <h1>{name}</h1>
            <ul className='social-links'>
                <li><a href={'https://github.com/'+socialLinks[0]} target="_blank" rel="noopener noreferrer"><img src={githubImg} alt="Github"/> {socialLinks[0]}</a></li>
                <li><a href={'https://www.linkedin.com/in/'+socialLinks[1]} target="_blank" rel="noopener noreferrer"><img src={linkedinImg} alt="LinkedIn"/> {socialLinks[1]}</a></li>
                <li><a href={'https://'+socialLinks[2]} target="_blank" rel="noopener noreferrer"><img src={portfolioImg} alt="Portfolio"/> {socialLinks[2]}</a></li>
                <li><a href={'mailto:'+socialLinks[3]} target="_blank" rel="noopener noreferrer"><img src={emailImg} alt="Email"/> {socialLinks[3]}</a></li>
                <li><a href={'tel:'+socialLinks[4]} target="_blank" rel="noopener noreferrer"><img src={contactImg} alt="Contact"/> {socialLinks[4]}</a></li>
            </ul>
        </div>
    )
}

export default HeadingDisplay