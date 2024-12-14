import React from 'react';
import { NavBar } from './components/navBar.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';
import { Skills } from './components/skills.jsx';
import { Projects } from './components/projects.jsx';
import { Contact } from './components/contact.jsx';
import { Footer } from './components/footer.jsx';

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
        < Footer />
        </div>
        </>
    )
    }

export default HomePage;