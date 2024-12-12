import React, { useState } from "react";

export const Projects = () => {
    // Array of project objects
    const projects = [
        {
            name: "Task Management System",
            description: "Bingo, a task management web app where manager can add daily tasks to employees with relevant document, and employees can view, download document and set task completed when done. Also provide analytics of daily tasks, work in progress and etc. Built using the MERN stack.",
            link: "https://example.com/project-two",
            image: "bingo.png",
        },
        {
            name: "Movie Ticket Booking Website",
            description: "Cinemaplex, a movie ticket booking website where the main features are Registered users can view movie details, pick date,time, seats and book ticketsGuest users can only browse details and watch trailersThe admin can manage the movies, showtimes and bookings",
            link: "https://example.com/project-one",
            image: "cinemaplexMovie.png",
        },
       
        {
            name: "Restaurant Mobile App",
            description: "Hungry Bunny, a restaurant application where registered users can pre order food. Guests are allowd to view food details. Authenticated with email passcodes. Also with the features of adding favorites, sortimg and searching with an admin panel to manage all restaurant information. Built using Flutter and Firebase.",
            link: "https://example.com/project-three",
            image: "hungrybunny.png",
        },
        {
            name: "City Weather App",
            description: "City weather condition displaying application using the Open Weather API. Users can search for a city and view the current weather conditions. Built using React.",
            link: "https://example.com/project-four",
            image: "weatherapp.PNG",
        },
        {
            name: "Plant Store",
            description: "A web application with the CRUD operations for a plant store where plants, details and prices are displayed and their details can be managed. Built using React and MERN stack",
            link: "https://example.com/project-five",
            image: "leavy.PNG",
        },
        {
            name: "Book Shop Information System",
            description: "A desktop application to manage books in a bookshop with the CRUD operations to manage book details. Manager manages the cashier accounts and cashier manages the books.  Built using java and swing UI libray appling the OOP concepts.",
            link: "https://example.com/project-five",
            image: "citybookshop.png",
        },
    ];

    // State to track the current project index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swap, setSwap] = useState(false);

    // Functions to handle navigation
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);

    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setSwap(!swap);
    };

    return (
        <div>
            <div className="p-10 pt-1">
                <h1 className="font-jobTitle text-center mt-5 mb-5 text-4xl">My Projects</h1>
            </div>
            <div className="relative flex items-center justify-center ">
                {/* Chevron Buttons */}
                <button
             onClick={goToPrevious}
            className="absolute z-10 left-10 lg:left-56 bg-white rounded-full flex items-center justify-center w-10 h-10 hover:bg-violet-100 "
            >
             ❮
        </button>

                <div className="overflow-hidden relative w-2/3">
                    {/* Project Display */}
                    <div className="  bg-bgGrey p-8 rounded    grid grid-cols-1 md:grid-cols-2 items-start  mb-16">
                    <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].name}
                    className="w-48 h-32 md:w-96 md:h-80 sm-justify-self-center bg-cover rounded-lg object-cover overflow-hidden"
                />

                        <div className="mt-8 md:mt-0 md:ml-10 ">
                            <h3 className="font-jobTitle text-2xl mt-5 mb-5 lg:mt-0">{projects[currentIndex].name}</h3>
                            <p className="font-poppins h-60 md:h-32 lg:h-40 text-sm md:text-xs lg:text-sm">{projects[currentIndex].description}</p>
                            <a href={projects[currentIndex].link} className="block mt-5 font-poppins text-lg tracking-wider text-violet-800 lg:w-1/2 border-2  border-solid border-violet-500 bg-violet-200 text-center p-2 "><p> VIEW PROJECT</p>
                               
                            </a>
                        </div>
                    </div>
                </div>
                <button
                    onClick={goToNext}
                    className="absolute right-10 lg:right-56 w-10 h-10 flex items-center justify-center bg-white rounded-full p-3 hover:bg-violet-200 transition"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};
