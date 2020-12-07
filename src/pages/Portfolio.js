import React from 'react';
import { PortfolioCard } from '../components/PortfolioCard';
import portfolioJSON from '../portfolio.json';

export const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='portfolio-wrapper'>
                <div id='cover-wrapper' className='card-wrapper'>
                    <div id='cover-card' className='card'>
                        <div className='title-wrapper'>
                            <h2>PORTFOLIO</h2>
                            <h2 id='arrow'>&#8656;</h2>
                            <p className='emoji'>ヾ(･ε･*)ﾉﾞ<span id='go'>=з</span></p>
                        </div>
                    </div>
                </div>
            
          
            { portfolioJSON.map(project => (
                <PortfolioCard
                    key={project.id}
                    name={project.name}
                    link={project.link}
                    github={project.github}
                    image={project.image}
                    description={project.description}
                />
            ))}
            </div>
        </section>
    );
};