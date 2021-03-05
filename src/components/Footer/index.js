import React from 'react';
import { useDisplayCard } from '../../utils/displayCardContext';
import './style.css';

export const Footer = () => {

    const displayCard = useDisplayCard().displayCard;

    return (
        <footer style={ (displayCard === true) ? { transform: 'translateY(40px)' } : { transform: 'translateY(0)'} } >
            <a href='https://www.instagram.com/_instagretch_/' target='_blank' rel='noreferrer'><i className='fab fa-instagram icon'></i></a>
            <a href='https://www.linkedin.com/in/gretchen-grimm-75b6391aa/  'target='blank'><i className='fab fa-linkedin icon'></i></a> 
            <a href='https://github.com/grimmgr' target='_blank' rel='noreferrer'><i className='fab  fa-github icon'></i></a>
            <a href='mailto: ggrimm33@gmail.com' target='_blank' rel='noreferrer'><i className='far fa-envelope icon'></i></a>
        </footer>
    );
};