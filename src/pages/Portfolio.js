import React, { useRef } from 'react';
// import { useWidth } from '../utils/widthContext';
import { useDisplayCard } from '../utils/displayCardContext';
import { PortfolioCard } from '../components/PortfolioCard';
import portfolioJSON from '../portfolio.json';

export const Portfolio = () => {

    const displayCard = useDisplayCard().displayCard;
    const topCard = useRef(null);
    const portfolioContainer = useRef(null);

    const liftCover = () => {
        portfolioContainer.current.scroll(0, 500);
    }

    const scrollToTop = () => {
        topCard.current.scrollIntoView( { behavior: 'smooth', block: 'end' } );
    }

    return (
        <section id='portfolio'>
            {/* { (width >= 700) &&
                 <div className='portfolio-header'>
                    <h2>PORTFOLIO</h2>
                </div>
            } */}
            <div className='portfolio-container' ref={portfolioContainer} style={ (displayCard === true) ? { overflow: 'hidden' } : { overflow: 'scroll'} } >
                <div id='card-wrapper0' className='card-wrapper'>
                    <div id='card0' className='card' ref={topCard}>
                        <div className='cover' onClick={ liftCover }>
                            <p className='symbol' id='arrow'>&#187;</p>
                            <h2>PORTFOLIO</h2>
                        </div>
                    </div>
                </div>
                { portfolioJSON.map(project => (
                    <PortfolioCard
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        link={project.link}
                        linkDisplay={project.link_display}
                        role={project.role}
                        description={project.description}
                        video={project.video}
                        image={project.image}
                        stackIndex={project.stack_index}
                        logo={project.logo}
                        top={project.top}
                        right={project.right}
                    />
                ))}
                
                <div id='card-wrapper7' className='card-wrapper'>
                    <div id='card7' className='card'>
                        <div className='cover' onClick={scrollToTop}>
                            <p className='symbol' id='arrow'>&#187;</p>
                            <h2>BACK TO TOP</h2>
                        </div>
                    </div>
                </div>
                {/* <div id='card-wrapper7' className='card-wrapper'>
                    <div className='back-to-top' onClick={scrollToTop}>
                        <p className='symbol' id='arrow'>&#187;</p>
                        <h2>BACK TO TOP</h2>
                    </div>
                </div> */}
            </div>
        </section>
    );
};