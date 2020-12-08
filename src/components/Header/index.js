import React from 'react';
import './style.css';

export const Header = () => {
    return (
        <header>
            <h1>GRETCHEN GRIMM</h1>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};