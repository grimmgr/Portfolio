import React from 'react';
import { useDisplayCard } from '../../utils/displayCardContext';
import { useWidth } from '../../utils/widthContext';
import './style.css';

export const Header = () => {
    
    const displayCard = useDisplayCard().displayCard;
    const width = useWidth().width;

    return (
        <header style={ (displayCard === true && width < 750) ? { transform: 'translateY(-120px)' } : { transform: 'translateY(0)'} } >
            <h1>GRETCHEN GRIMM</h1>
            <nav>
                <ul className='nav-links'>
                    <li><a className='nav-link' href="#portfolio">portfolio</a></li>
                    <li><a className='nav-link' href="#contact">contact</a></li>
                </ul>
            </nav>
            <div className='header-center-line'></div>
        </header>
    );
};