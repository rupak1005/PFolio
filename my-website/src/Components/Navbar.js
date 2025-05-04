import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash, BsFillEnvelopeFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  let lastScrollTop = 0; // Store the last scroll position

  // Scroll handler to detect scroll direction
  function scrollHandler() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide the navbar (slide up)
    if (scrollTop > lastScrollTop && scrollTop > 20) {
      setHideNavbar(true); // Hide navbar if scrolled down
    } 
    // If scrolling up and at the very top of the page, show the navbar (slide down)
    else if (scrollTop <= 0) {
      setHideNavbar(false); // Show navbar when at the top
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  }

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler); // Clean up listener
  }, []);

  return (
    <nav className={`Navbar ${hideNavbar ? 'hidden' : ''}`}>
     <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>
        PORTFOLIO
     </h1>

      <div className='Hamburger' onClick={showMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <ul className='NavbarLinks'>
        <li onClick={hideMenu}><Link to="/"><AiOutlineHome />  Home</Link></li>
        <li onClick={hideMenu}><Link to="/About"><BsPerson />  About</Link></li>
        <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash />  Projects</Link></li>
        <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument />  Resume</Link></li>
        <li onClick={hideMenu}><Link to="/Contact"><BsFillEnvelopeFill />  Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
