import React from 'react';
import './style.css';

export const PortfolioCard = (props) => {
    const { id, name, link, description } = props;
    return (
        <div className='card-wrapper'>
            <div id={id} className='card'>
                <div className='title-wrapper'>
                  <a href={link} target='_blank' rel='noreferrer'><h3>{name}</h3></a>
                </div>
                <p className='description'>{description}</p>
                <div className='project-links'>
                    <a href={props.link} target='_blank' rel='noreferrer'>see it</a> 
                    <a href={props.github} target='_blank' rel='noreferrer'>see the code</a>
                </div>
            </div>
        </div>
    );
};