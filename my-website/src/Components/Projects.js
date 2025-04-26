import React from 'react';
import ProjectBox from './ProjectBox';
import LostFound from '../images/LostFound.png'
import Yumzy from '../images/Yumzy.png';
import Outrage from '../images/Outrage.png';
import Quiz from '../images/Quiz.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Outrage} projectName="Outrage" />
        <ProjectBox projectPhoto={Yumzy} projectName="Yumzy" />
        <ProjectBox projectPhoto={LostFound} projectName="FindingMyLost" />
        <ProjectBox projectPhoto={Quiz} projectName="QuizApp" />
      </div>

    </div>
  )
}

export default Projects