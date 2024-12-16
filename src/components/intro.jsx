import { TypeAnimation } from 'react-type-animation';
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { animateScroll as scroll, scroller } from 'react-scroll';
import send from '../assets/send.mp3';


export const Intro = () => {

    const handleScrollToSection = (id) => {
        scroller.scrollTo(id, {
            duration: 800,
            smooth: 'easeInOutQuart',
            offset: -10,
        });
    };

    

    const CV_URL = '/Portfolio-Website/KeshaniPereraCV.pdf';
    const handleFileDownload = () => {
        new Audio(send).play();
        const link = document.createElement('a');
        link.href = CV_URL;
        link.download = 'KeshaniPereraCV.pdf';
        link.click();
    };

    return (
        <div id="intro">
            <BrowserRouter>
                <div className="text-center mt-36 pl-12 pr-12 flex flex-col lg:flex-row items-center justify-center lg:ml-10">
                    <div className="mt-6 lg:mt-0 gap-5 flex flex-col lg:text-left">
                        <h2 className="font-name text-2xl lg:text-5xl ">I'm Keshani Perera</h2>
                        <TypeAnimation
                            className='font-jobTitle text-3xl lg:mt-5 lg:mb-5 lg:text-6xl  '
                            sequence={[
                                'A Software Developer',
                                1000,
                                'A Graphic Designer',
                                1000,
                                'A Mobile App Developer',
                                1000,
                                'A UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        <p className="font-poppins lg:pr-48 lg:text-xl">
                            I am an undergraduate software engineering student from Sri Lanka with a strong focus
                            on frontend development and experience in both frontend and backend development.
                        </p>

                        {/* Mobile Profile Image */}
                        <div className="mt-2 flex justify-center lg:hidden">
                            <img
                                src="profile_img.png"
                                alt="Profile Image"
                                className="w-1/2"
                            />
                        </div>

                        {/* Buttons Section */}
                        <div id="about" className="flex justify-center lg:justify-start gap-8 text-center lg:mt-10">
                            <button
                                className="bg-lightPurple w-40 font-poppins py-2 px-4 rounded-full h-10 flex"
                                onClick={handleFileDownload} // Trigger file download on click
                            >
                                Get Resume <img src="download.png" alt="Download Icon" className="w-5 justify-center ml-1"/> 
                            </button>
                            <Link
                                to="#projects"
                                className="bg-lightBlue2 w-36 font-poppins py-2 px-4 rounded-full"
                                onClick={() => handleScrollToSection('contact')}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Profile Image */}
                    <div className="hidden lg:block lg:align-middle justify-center lg:mr-32">
                        <img
                            src="profile_img.png"
                            alt="Profile Image"
                            className="w-max mr-72"
                        />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};
