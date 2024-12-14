export const About = () => {
    return (
        <div className="p-10" >
            <h1 className="font-jobTitle text-center  mt-5 mb-5 text-4xl">About Me</h1>
            <div className="bg-bgGrey mt-8 p-8 rounded-lg md:flex md:items-start">
                <p className="font-poppins md:w-1/2">
                    I am a dedicated software engineering undergraduate enthusiast with a strong foundation in frontend
                    development, complemented by my skills in full-stack and Flutter mobile application development.                    
                    Currently, I am working a freelancer while diving deeper into the MERN stack, honing my expertise to create innovative and
                    efficient solutions across multiple platforms.
                
                   
                </p>
                
                <div className="mt-8 md:mt-0 md:ml-40">
                    <h3 className="font-jobTitle text-2xl mt-5 mb-5  lg:mt-0 ">Education</h3>
                    <div className="flex">
                        <div>
                            <img src="education.png" alt="University" className="" />
                        </div>
                        <div className="pl-6">
                            <h5 className="font-poppins" id="skills">Bachelor of Software Engineering</h5>
                            <p className="font-poppins text-gray-600 text-sm mt-3">Cardiff Metropolitan University</p>
                            <p className="font-poppins text-gray-600 text-sm ">ICBT Campus</p>
                            <p className="font-poppins text-gray-600 text-sm">2023 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
