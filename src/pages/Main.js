import React from 'react';
import { Welcome } from './Welcome';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { useDisplayCard } from '../utils/displayCardContext';

export const Main = () => {

    const displayCard = useDisplayCard().displayCard;

    return (
        <main style={ (displayCard === true) ? { overflow: 'hidden' } : { overflow: 'scroll'} } >
            <Welcome />
            <Portfolio />
            <Contact />
        </main>
    );
};