import React from 'react';
import { NavBar } from './components/navBar.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';
import { Skills } from './components/skills.jsx';

export const HomePage = () => {
    return (
        <>
        <div>
        < NavBar />
        < Intro />
        < About />
        < Skills />

        </div>
        </>
    )
    }

export default HomePage;