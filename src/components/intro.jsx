import { TypeAnimation } from 'react-type-animation';
export const Intro = () => {
    return (
        <div className="text-center pl-12 pr-12 flex flex-col lg:flex-row items-center justify-center lg:ml-10">
            <div className="mt-6 lg:mt-0 gap-5 flex flex-col lg:text-left">
                <h2 className="font-name text-2xl lg:text-5xl">I'm Keshani Perera</h2>
                <TypeAnimation className='font-jobTitle text-3xl  lg:mt-5 lg:mb-5 lg:text-6xl'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A Software Developer',
        1000, // wait 1s before "
        'A Graphic Designer',
        1000,
        'A Mobie App Developer',
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

                <div className="mt-2 flex justify-center lg:hidden">
                    <img
                        src="profile_img.png"
                        alt="Profile Image"
                        className="w-1/2"
                    />
                </div>
                <div className="flex justify-center lg:justify-start gap-8 text-center lg:mt-10">
                    <a href="#contact" className="bg-lightPurple  w-36 font-poppins py-2 px-4 
                    rounded-full">Get Resume</a>
                    <a href="#projects" className="bg-lightBlue2 w-36 font-poppins py-2 px-4 
                    rounded-full">Contact</a>
                </div>
            </div>
            <div className="hidden lg:block lg:align-middle justify-center lg:mr-32">
                <img
                    src="profile_img.png"
                    alt="Profile Image"
                    className="w-max mr-72"
                />
            </div>
        </div>
    );
};
