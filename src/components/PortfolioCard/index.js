import React from 'react';
import './style.css';

export const PortfolioCard = (props) => {
    const { id, name, link, description } = props;
    return (

            <div id={`card-wrapper${id}`} className='card-wrapper'>
                <div id={`card${id}`} className='card'>
                    <div className='title-wrapper'>
                        <a href={link} target='_blank' rel='noreferrer'><h3>{name}</h3></a>
                    </div>
                    <div className='card-content'>
                        <p className='description'>{description}</p>
                        {/* <div className='preview'>
                            <p className='symbol' id='triangle'>&#9660;</p>
                            <p className='preview-text'>preview</p>
                        </div> */}
                        <div className='project-links-wrapper'>
                            <div className='project-links'>
                                <a href={props.link} target='_blank' rel='noreferrer'>see it</a> 
                                <a href={props.github} target='_blank' rel='noreferrer'>see the code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};