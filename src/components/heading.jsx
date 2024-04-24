import React from 'react'

//Importing images
import githubImg from '../src/assets/socials/github.svg'
import linkedinImg from '../src/assets/socials/linkedin.svg'
import portfolioImg from '../src/assets/socials/portfolio.svg'
import emailImg from '../src/assets/socials/email.svg'
import contactImg from '../src/assets/socials/contact-num.svg'

function Heading({name, socialLinks}) {
    return(
        <div className='heading-main'>
            <h1>{name}</h1>
            <ul className='social-links'>
                <li><a href={socialLinks[0]}><img src={githubImg} alt="Github"/> {socialLinks[0]}</a></li>
                <li><a href={socialLinks[1]}><img src={linkedinImg} alt="LinkedIn"/> {socialLinks[1]}</a></li>
                <li><a href={socialLinks[2]}><img src={portfolioImg} alt="Portfolio"/> {socialLinks[2]}</a></li>
                <li><a href={socialLinks[3]}><img src={emailImg} alt="Email"/> {socialLinks[3]}</a></li>
                <li><a href={socialLinks[4]}><img src={contactImg} alt="Contact"/> {socialLinks[4]}</a></li>
            </ul>
        </div>
    )
}

export default Heading