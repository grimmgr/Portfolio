import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

export const PortfolioCard = (props) => {
    const { id, name, link, description } = props;
    const [ flipCard, setFlipCard ] = useState(false);
    const nodeRef = useRef(null);

    // const toggleFlip = () => {
    //     flipCard ? setFlipCard(false) : setFlipCard(true);
    // }

    return (

            <div id={`card-wrapper${id}`} className='card-wrapper'>
                <CSSTransition 
                    in={!flipCard}
                    timeout={800}
                    classNames='flip'
                    >
                    <div id={`card${id}`} className='card'>
                        <div className='card-front' onClick={ () =>  setFlipCard(true) }>
                            <h3>{name}</h3>
                        </div>
                        <CSSTransition
                            in={flipCard}
                            timeout={800}
                            classNames='card-back'
                            nodeRef={nodeRef}
                            unmountOnExit
                            >
                            <div className='card-back' ref={nodeRef}>
                                <div className='title-wrapper'>
                                    <h4>{name}</h4>
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
                                <p className='flip-arrow' onClick={ () => setFlipCard(false) }>&#8594;</p>
                            </div>
                        </CSSTransition>
                    </div>
                </CSSTransition>
            </div>
    )
};