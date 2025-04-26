import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaJava, FaGitAlt, FaGithub, FaFigma, FaAndroid, FaLinux, FaReact} from "react-icons/fa";
import {SiMongodb, SiPostman, SiRender, SiSpringboot, SiMysql, SiFirebase, SiKotlin} from "react-icons/si";
import {GiJetpack} from "react-icons/gi";

const Skills = ({skill}) => {
    const icon = {
      React:<FaReact/>,
      ReactNative:<FaReact/>,
      Kotlin:<SiKotlin/>,
      Jetpack:<GiJetpack/>,
      Java: <FaJava />,
      C: <CgCPlusPlus />,
      Postman: <SiPostman />,
      Android: <FaAndroid />,
      SpringBoot: <SiSpringboot />,
      Mongo: <SiMongodb />,
      Git: <FaGitAlt />,
      Github: <FaGithub />,
      Figma: <FaFigma />,
      Render: <SiRender />,
      Firebase: <SiFirebase />,
      MySql: <SiMysql />,
      Linux: <FaLinux />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
