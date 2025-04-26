import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Aryan Salaria</h4>
      <h4>Copyright &copy; 2025 AS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Aryan-747" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aryan-salaria-b75480243" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:arayn.32@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/mancityfan/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer