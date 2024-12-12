import { useState } from "react";

export const NavBar = () => {
  const [isPopupOpen, setPopupStatus] = useState(false);

  const handleNavBar = () => {
    setPopupStatus(!isPopupOpen);
  };

  return (
    <>
      <div className="bg-lightBlue p-8 h-5  flex m-10 rounded-lg justify-center items-center font-links">
        {/* Links for larger screens */}
        <div className="hidden sm:flex gap-8">
          <a href="#" className="mr-4">Home</a>
          <a href="#" className="mr-4">About</a>
          <a href="#" className="mr-4">Skills</a>
          <a href="#" className="mr-4">My Projects</a>
          <a href="#" className="mr-4">Contact</a>
        </div>

        {/* Icon for smaller screens */}
        <button
          className="sm:hidden flex justify-end items-center w-full"
          onClick={handleNavBar}
        >
          <img src="navbar_icon.png" alt="Nav Bar Icon" className="w-5 ml-2" />
        </button>
      </div>

      {/* Sliding menu */}
      <div
        className={`sm:hidden fixed top-20 m-10 left-0 z-10 transform transition-all duration-500 ease-in-out ${
          isPopupOpen ? "translate-x-5" : "-translate-x-full bg-white"
        } bg-lightBlue w-64 p-8 rounded-lg`}
      >
        <a href="#" className="block mb-4">Home</a>
        <a href="#" className="block mb-4">About</a>
        <a href="#" className="block mb-4">Skills</a>
        <a href="#" className="block mb-4">My Projects</a>
        <a href="#" className="block">Contact</a>
      </div>
    </>
  );
};
