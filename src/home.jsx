import React from 'react';
import { NavBar } from './components/navBar.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';
import { Skills } from './components/skills.jsx';
import { Projects } from './components/projects.jsx';

export const HomePage = () => {
    return (
        <>
        <div>
        < NavBar />
        < Intro />
        < About />
        < Skills />
        < Projects />

        </div>
        </>
    )
    }

export default HomePage;