import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';
import { useDisplayCard } from '../../utils/displayCardContext';

export const PortfolioCard = (props) => {
    const { id, name, link, linkDisplay, role, description } = props;
    const [ cardWidth, setCardWidth ] = useState(275);
    const [ cardHeight, setCardHeight ] = useState(275);
    const [ flipCard, setFlipCard ] = useState(false);
    const setDisplayCard = useDisplayCard().setDisplayCard;
    const cardRef = useRef(null);
    const nodeRef = useRef(null);

    const grow = () => {
        setCardWidth('100%');
        setCardHeight('100%')
        setDisplayCard(true);
    }

    const shrink = () => {
        setCardWidth(275);
        setCardHeight(275);
        setDisplayCard(false);
    }

    const scrollCardToView = () => { 
        cardRef.current.scrollIntoView(true);
    }

    return (

            <div id={`card-wrapper${id}`} className='card-wrapper' >
                <CSSTransition 
                    in={!flipCard}
                    timeout={800}
                    classNames='flip'
                    >
                    <div id={`card${id}`} className='card' style={{ width: cardWidth, height: cardHeight }} ref={cardRef} >
                        <div className='card-front' onClick={ () => setFlipCard(true) }>
                            <h3>{name}</h3>
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
                            <div className='card-back' ref={nodeRef}>
                                <div className='title-wrapper'>
                                    <a href={link} target='_blank' rel='noreferrer'><h4>{linkDisplay}</h4></a>
                                </div>
                                <div className='card-content'>
                                    <p className='role'>{role}</p>
                                    <p className='description'>{description}</p>
                                </div>
                                <p className='flip-arrow' onClick={ () => setFlipCard(false) }>&#8594;</p>
                            </div>
                        </CSSTransition>
                    </div>
                </CSSTransition>
            </div>
    )
};