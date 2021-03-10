import React from 'react';
import { Welcome } from './Welcome';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { useDisplayCard } from '../utils/displayCardContext';
import { useWidth } from '../utils/widthContext';

export const Main = () => {

    const displayCard = useDisplayCard().displayCard;
    const width = useWidth().width;
    let styles;

    if ( displayCard === true && width < 750 ) {
        styles = { 
            overflow: 'hidden',
            top: 0,
            bottom: 0
        }
    } else if ( displayCard === true && width >= 750 ) {
        styles = { 
            overflow: 'hidden',
            top: '120px',
            bottom: 0
        }
    } else {

        styles = { 
            overflow: 'scroll',
            top: '120px',
            bottom: '40px'
        }
    }

    return (
        <main style={ styles } >
            <Welcome />
            <Portfolio />
            <Contact />
        </main>
    );
};