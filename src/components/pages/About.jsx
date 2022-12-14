import React from 'react'
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
function About() {
  return (
    <div className='about'>
      <h1>Projeto Desenvolvido com React</h1>
      <div className="contact">
      <a href="https://github.com/EmersonSinezio"><h1>Github <AiOutlineGithub/></h1></a>
      <a href="https://www.linkedin.com/in/emerson-mesquita-317a81258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7N26%2Bv0TQomJlQ6K%2Ft4ZvQ%3D%3D"><h1>Linkedin <AiOutlineLinkedin/></h1></a>
      </div>
    </div>
  )
}

export default About