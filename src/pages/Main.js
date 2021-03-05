import React from 'react';
import { Welcome } from './Welcome';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { useDisplayCard } from '../utils/displayCardContext';

export const Main = () => {

    const displayCard = useDisplayCard().displayCard;
    let styles;

    (displayCard === true) ? 
        styles = { 
            overflow: 'hidden',
            top: 0,
            bottom: 0
        }
    : 
        styles = { 
            overflow: 'scroll',
            top: '120px',
            bottom: '40px'
        }

    return (
        <main style={ styles } >
            <Welcome />
            <Portfolio />
            <Contact />
        </main>
    );
};