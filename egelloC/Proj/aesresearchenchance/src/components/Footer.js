import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './style.css'

export default function Footer(props) {
  return (
    <div className='footer'> 
    <a className='linka' href={`mailto:${props.email}`}><MailIcon/> GMail</a>
    <a className='linka' href={`${props.github}`}><GitHubIcon/> Github</a>
    <a className='linka' href={`${props.linkedin}`}><LinkedInIcon/>Linkedin</a>
    </div>
    
  )
}
