import React from 'react';
import ProjectBox from './ProjectBox';
import YouTubeClone from '../images/YouTubeClone.png'
import Yumzy from '../images/Yumzy.png';
import Outrage from '../images/Outrage.png';
import QuizApp from '../images/Quiz.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Outrage} projectName="Outrage" />
        <ProjectBox projectPhoto={Yumzy} projectName="Yumzy" />
        <ProjectBox projectPhoto={YouTubeClone} projectName="YouTubeClone" />
        <ProjectBox projectPhoto={QuizApp} projectName="QuizApp" />
      </div>

    </div>
  )
}

export default Projects