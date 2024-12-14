import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { animateScroll as scroll, scroller } from 'react-scroll';

export const NavBar = () => {
  const [isPopupOpen, setPopupStatus] = useState(false);

  const handleNavBar = () => {
    setPopupStatus(!isPopupOpen);
  };

 
  const handlescrollTop = () => {
    scroll.scrollToTop({
      smooth: 'easeInOutQuad',  
    });
  };


  const handleScrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -10,  
    });
  };

  return (
    <>
      <BrowserRouter>
        <div className="w-full fixed z-20 bg-white top-0" id="navbar">
          <div className="bg-lightBlue  p-8 h-5 flex m-5 rounded-lg justify-center items-center font-links">
     
            <div className="hidden sm:flex gap-8">
              <Link
                to="#intro"
                onClick={handlescrollTop} 
                className="mr-4  hover:bg-white hover:rounded-full pl-6 pr-6 p-2 "
              >
                Home
              </Link>
              <Link
                to="#about"
                onClick={() => handleScrollToSection('about')}
                className="mr-4  hover:bg-white hover:rounded-full pl-6 pr-6 p-2 "
              >
                About
              </Link>
              <Link
                to="#skills"
                onClick={() => handleScrollToSection('skills')} 
                className="mr-4  hover:bg-white hover:rounded-full pl-6 pr-6 p-2 "
              >
                Skills
              </Link>
              <Link
                to="#projects"
                onClick={() => handleScrollToSection('projects')} 
                className="mr-4  hover:bg-white hover:rounded-full pl-6 pr-6 p-2 "
              >
              Projects
              </Link>
              <Link
                to="#contact"
                onClick={() => handleScrollToSection('contact')}
                className="mr-4  hover:bg-white hover:rounded-full pl-6 pr-6 p-2 "
              >
                Contact
              </Link>
            </div>

  
            <button
              className="sm:hidden flex justify-end items-center w-full"
              onClick={handleNavBar}
            >
              <img src="navbar_icon.png" alt="Nav Bar Icon" className="w-5 ml-2" />
            </button>
          </div>
        </div>
        < div className="bg-lightBlue rounded-full fixed bottom-10 right-10 z-10 p-3" >
        <button onClick={handlescrollTop} >
          <img src="up.png" alt="Logo" className="w-4 md:w-6" />

        </button>
        </div>

        <div
          className={`sm:hidden fixed top-20 m-10 left-0 z-10 transform transition-all duration-500 ease-in-out ${
            isPopupOpen ? "translate-x-5" : "-translate-x-full bg-white"
          } bg-lightBlue w-64 p-8 rounded-lg`}
        >
          <a
            href="#intro"
            className="block mb-4 "
            onClick={handlescrollTop} 
          >
            Home
          </a>
          <a
            href="#about"
            className="block mb-4"
            onClick={() => handleScrollToSection('about')} 
          >
            About
          </a>
          <a
            href="#skills"
            className="block mb-4"
            onClick={() => handleScrollToSection('skills')} 
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block mb-4"
            onClick={() => handleScrollToSection('projects')} 
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="block"
            onClick={() => handleScrollToSection('contact')} 
          >
            Contact
          </a>
        </div>
      </BrowserRouter>
    </>
  );
};
