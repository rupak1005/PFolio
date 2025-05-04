import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/homeAnimation1.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar2.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Aryan Salaria</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
            <p>
            <p>My name is <b>Aryan Salaria</b>, and I come from Phagwara, Punjab.<br/><br/>

                I am currently pursuing my Bachelor's degree in <b>Computer Science and Engineering</b> at <b>Lovely Professional University</b>, where I have achieved a <b>CGPA of 7.72</b>. My academic journey has been focused on building a strong foundation in core computer science concepts and applying them through practical, real-world projects.<br/><br/>

                I specialize in <b>Full Stack Web Development</b> with a focus on the <b>MERN stack</b> (MongoDB, Express.js, React.js, and Node.js). Over time, I have developed the ability to design and build dynamic, responsive, and efficient web applications. I enjoy working on both the frontend and backend, ensuring seamless integration between the two.<br/><br/>

                Alongside web development, I am deeply passionate about <b>Data Structures and Algorithms (DSA)</b> and actively participate in <b>competitive programming</b> contests. Solving complex problems not only strengthens my logical thinking but also helps me stay sharp and up-to-date with different programming paradigms.<br/><br/>
                </p>

            </p>
        </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center" 
          ,height:"100vh"}}>
            
              <Tilt>
                  <img className='Avatar' src={Avatar} alt="" />
              </Tilt>
          </div>

      </div>
    </div>
  )
}

export default Home