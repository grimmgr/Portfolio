import React from 'react';
import './style.css';

export const PortfolioCard = (props) => {
    const { id, name, link, image, description } = props;
    return (
        <div className='card-wrapper'>
            <div id={id} className='card light'>
                <div className='title-wrapper dark'>
                  <a href={link} target='_blank' rel='noreferrer'>{name}</a>
                </div>
                <div className='img-wrapper'>
                  <img src={image} alt={name} />
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};