import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/globe.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p> I have also participated in various <b>Hackathons</b>, including: - Winning <b>Tantradnya 2022</b> for developing a smart solution to control pollution. - Winning <b>Hack to Future</b>, a 24-hour hackathon, for effectively managing surplus food. <br/><br/>
I enjoy creating original projects with beautiful designs. You can check out some of my work in the projects section.<br/><br/> I am <b>open</b> to new collaborations or opportunities where I can contribute and grow. Feel free to connect with me—links are in the footer.<br/><br/> Besides coding, I have a passion for <b>UI/UX Design</b>.

</p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Android' />
        <Skills skill='SpringBoot' />
          <Skills skill='ReactNative'/>
        <Skills skill='MySql' />
        <Skills skill='Mongo' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Java' />
          <Skills skill='Jetpack'/>
          <Skills skill='Kotlin'/>
          <Skills skill='React'/>
        <Skills skill='C' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Firebase' />
        <Skills skill='Render' />
        <Skills skill='Linux'/>

      </div>
    </>
  )
}

export default About