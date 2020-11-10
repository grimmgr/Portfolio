import React from 'react';
import './style.css';

export const PortfolioCard = (props) => {
    const { id, name, link, image, description } = props;
    return (
        <div className='card-wrapper'>
            <div id={id} className='card'>
                <div className='title-wrapper'>
                  <a href={link} target='_blank' rel='noreferrer'><h3>{name}</h3></a>
                </div>
                <div className='img-wrapper'>
                  <img src={image} alt={name} />
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};