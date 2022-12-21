import React from 'react'
import { ashutosh, linkedin, gmail, github, leetcode, download, linkUrl, phone, youtube, resumePdf } from '../../assets'


const AboutCard = () => {
  return (
    <div className='about-card'>
      <div className='text-center'>
        <img className='profilePic' src={ashutosh} alt="Ashutosh Pic" />
        <p className='profileName'>Ashutosh Pandit</p>
      </div>
      <div>
        <p className='px-1 profileDesc text-center'>A passionate self-thaught FullStack Developer from India, who loves building applications from the scratch with full ownership of work</p>
      </div>
      <a className='customBtn mt-2' href={resumePdf} target="_blank" rel="noopener noreferrer">Ashutosh's Resume
        <img className='downloadPic' src={ download} alt="download" />
      </a>
      <hr />
      <div className='profile-contacts my-4'>
        <div className='my-2'>
          <a href="mailto:ashutoshpandit308@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmail} alt="Gmail" width="20px"/>
            {" "} ashutohspandit308@gmail.com
          </a>
        </div>

        <div className='my-2'>
        <img src={phone} alt="phone" height="16px"/>
        {" "}  +91-96676626371
        </div>

        <div className='my-2'>
          <a href='/' target="_blank" rel="noopener noreferrer">            
        <img src={linkUrl} alt="phone" height="16px"/>
        {" "}  Portfolio website
          </a>
        </div>
      </div>
      <hr />
      <h5>Profiles</h5>
      <div className='social-profile-wrapper p-2'>
        <SocialProfileCard imgSrc={linkedin} title="Linkedin" linkHrf="https://www.linkedin.com/in/ashutosh-pandit-2022/?utm_source=Portfolio"/>
        <SocialProfileCard imgSrc={github} title="Github" linkHrf="https://github.com/ashu-2022/?utm_source=Portfolio"/>
        <SocialProfileCard imgSrc={leetcode} title="Leetcode" linkHrf="https://leetcode.com/ashu_2022/?utm_source=Portfolio" />
        <SocialProfileCard imgSrc={youtube} title="Youtube" linkHrf="https://www.youtube.com/@ashutosh-pandit/?utm_source=Portfolio"/>
      </div>
    </div>
  )
}

export default AboutCard


export const SocialProfileCard = ({ imgSrc, title, linkHrf }) => {
  return (
    <div className='social-profile text-center'>
      <a href={linkHrf} target="_blank" rel="noopener noreferrer">
        <img width="32px" src={imgSrc} alt={title} />
        <p>{title}</p>
      </a>
    </div>
  )
}