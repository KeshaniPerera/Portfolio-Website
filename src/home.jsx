import React from 'react';
import { NavBar } from './components/navBar.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';

export const HomePage = () => {
    return (
        <>
        <div>
        < NavBar />
        < Intro />
        < About />

        </div>
        </>
    )
    }

export default HomePage;