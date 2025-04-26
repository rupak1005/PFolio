import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Avinash Pauskar</h4>
      <h4>Copyright &copy; 2024 AP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/avinash-p05" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/avinash-pauskar/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:avinashpauskar05@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/avinash-p05/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer