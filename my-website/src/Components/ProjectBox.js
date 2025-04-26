import React from 'react';
import {FaGithub} from "react-icons/fa";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FindingMyLostDesc : "Developed an Android application for reporting and finding lost items within the college campus. Utilized Java and XML for development and implemented Firebase for backend support.",
    FindingMyLostGithub : "https://github.com/avinash-p05/Lost_and_Found.git",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    YumzyDesc: "Yumzy is a dynamic food ordering website built using PHP. The platform provides an easy-to-use interface for customers to browse and order food from local restaurants. It integrates a seamless payment system and user-friendly features to enhance the overall experience. Administrators can manage menu items, track orders, and update restaurant information in real-time.",
    YumzyGithub : "https://github.com/Aryan-747/FoodOrderingPHP",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    OutrageDesc:"Outrage is a modern weather-checking website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to search for real-time weather updates of any city across the world. The platform fetches live weather data from external APIs and displays it in a clean, responsive, and user-friendly interface. With features like temperature, humidity, wind speed, and weather condition forecasts, Outrage offers a seamless and interactive experience for users who want quick and accurate weather information.",   
    OutrageGithub:"https://github.com/Aryan-747/WeatherCheck",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    QuizAppDesc:"An innovative Quiz app enabling the users to choose the correct answer from 4 different options and the final score of the questions answered correctly and wrongly will be calculated.",
    QuizGithub:"https://github.com/avinash-p05?tab=repositories",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

          
        </div>
    </div>
  )
}

export default  ProjectBox