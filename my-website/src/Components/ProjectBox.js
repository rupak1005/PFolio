import React from 'react';
import {FaGithub} from "react-icons/fa";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    YouTubeCloneDesc: "The YouTube Clone is a video streaming platform developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to upload, view, and interact with videos in a user-friendly interface. Users can browse through categories, like, comment, and subscribe to channels, mimicking the core features of YouTube. The backend is powered by Node.js and Express.js, handling user authentication, video uploads, and database interactions through MongoDB.",
    YouTubeCloneGithub : "https://github.com/avinash-p05/Lost_and_Found.git",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    YumzyDesc: "Yumzy is a dynamic food ordering website built using PHP. The platform provides an easy-to-use interface for customers to browse and order food from local restaurants. It integrates a seamless payment system and user-friendly features to enhance the overall experience. Administrators can manage menu items, track orders, and update restaurant information in real-time.",
    YumzyGithub : "https://github.com/Aryan-747/FoodOrderingPHP",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    OutrageDesc:"Outrage is a modern weather-checking website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to search for real-time weather updates of any city across the world. The platform fetches live weather data from external APIs and displays it in a clean, responsive, and user-friendly interface. With features like temperature, humidity, wind speed, and weather condition forecasts, Outrage offers a seamless and interactive experience for users who want quick and accurate weather information.",   
    OutrageGithub:"https://github.com/Aryan-747/WeatherCheck",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    QuizAppDesc: "The Quiz App is an interactive platform developed using Laravel, where users can participate in various quiz categories. The app presents multiple-choice questions with four options, and users are required to select the correct answer. Upon completion of the quiz, the app calculates the user's score based on the number of correct and incorrect answers. The application also provides real-time feedback, allowing users to see which answers were correct or wrong, and offers an engaging way to track progress over time.",
    QuizAppGithub:"https://github.com/Aryan-747/QuizApplicationLaravel",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div className='projectText'>
            <h3>{projectName}</h3>   {/* The project name heading */}
            <p>{desc[projectName + 'Desc']}</p>  {/* Description */}
            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
)

}

export default  ProjectBox