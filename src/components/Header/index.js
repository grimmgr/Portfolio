import React from 'react';
import { useDisplayCard } from '../../utils/displayCardContext';
import './style.css';

export const Header = () => {
    
    const displayCard = useDisplayCard().displayCard;

    return (
        <header style={ (displayCard === true) ? { transform: 'translateY(-120px)' } : { transform: 'translateY(0)'} } >
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