import React from 'react';
import { NavBar } from './components/navBar.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';
import { Skills } from './components/skills.jsx';
import { Projects } from './components/projects.jsx';
import { Contact } from './components/contact.jsx';

export const HomePage = () => {
    return (
        <>
        <div>

        < NavBar />
        < Intro />
        < About />
        < Skills />
        < Projects />
        < Contact />
        </div>
        </>
    )
    }

export default HomePage;