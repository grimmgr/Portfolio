import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';
import { useDisplayCard } from '../../utils/displayCardContext';

export const PortfolioCard = (props) => {
    const { id, name, link, linkDisplay, role, description, video, image, stackIndex, logo, top, right } = props;
    const [ zIndex, setZIndex ] = useState(stackIndex);
    const [ cardWidth, setCardWidth ] = useState(270);
    const [ cardHeight, setCardHeight ] = useState(270);
    const [ flipCard, setFlipCard ] = useState(false);
    const setDisplayCard = useDisplayCard().setDisplayCard;
    const cardRef = useRef(null);
    const nodeRef = useRef(null);

    const grow = () => {
        setCardWidth('100%');
        setCardHeight('100%');
        setZIndex(10);
        setDisplayCard(true);
    }

    const shrink = () => {
        setCardWidth(270);
        setCardHeight(270);
        setZIndex(stackIndex);
        setDisplayCard(false);
    }

    const scrollCardToView = () => { 
        cardRef.current.scrollIntoView( {block: 'start' });
    }

    let cardPadding;
    let cardTop;
    let cardRight;
    let cardRotation;

    if ( flipCard ) {
        cardPadding = 0;
        cardTop = 0;
        cardRight = 0;
        cardRotation = 0;

    } else { 
        cardPadding = '10px';
        cardTop = `${top}px`;
        cardRight = `${right}px`;
    }

    // cardTop = `${(Math.floor(Math.random() * (7) - 3)) * 5}px`;
    // cardRight = `${(Math.floor(Math.random() * (7) - 3)) * 5}px`;
    // cardRotation = Math.floor(Math.random() * (21) - 10);

    const cardStyles = { 
        width: cardWidth, 
        height: cardHeight, 
        padding: cardPadding,
        top: cardTop,
        right: cardRight
    }


    return (

            <div id={`card-wrapper${id}`} className='card-wrapper' style={{ zIndex: zIndex }} >
                <CSSTransition 
                    in={!flipCard}
                    timeout={800}
                    classNames='flip'
                    >
                    <div id={`card${id}`} className='card' style={ cardStyles } ref={cardRef} >
                        <div id={`card-front${id}`} className='card-front' onClick={ () => setFlipCard(true) }>
                            { logo && <img id={`logo${id}`} className='project-name' src={logo} alt='project logo' /> }
                            <h3 className='project-name'>{name}</h3>
                        </div>
                        <CSSTransition
                            in={flipCard}
                            timeout={800}
                            classNames='card-back'
                            nodeRef={nodeRef}
                            onEnter={grow}
                            onEntered={scrollCardToView}
                            onExit={shrink}
                            unmountOnExit
                            >
                            <div id={`card-back${id}`} className='card-back' ref={nodeRef}>
                                <p className='close' onClick={ () => setFlipCard(false) }>X</p>
                                <div className='card-back-content'>
                                    <div className='title-wrapper'>
                                        <a href={link} target='_blank' rel='noreferrer'><h4>{linkDisplay}</h4></a>
                                    </div>
                                    <p className='role'>{role}</p>
                                    <p className='description'>{description}</p>
                                    <div className='demo'>
                                        { props.video ?
                                            <video className='demo-vid' controls >
                                                <source src={video} type='video/mp4'></source>
                                            </video>
                                        :
                                            <img className='demo-pic' src={image} alt='still of project' />
                                        }
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </CSSTransition>
            </div>
    )
};