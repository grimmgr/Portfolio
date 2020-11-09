import React from 'react';
import { PortfolioCard } from '../components/PortfolioCard';
import portfolioJSON from '../portfolio.json';

export const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='portfolio-wrapper'>
            { portfolioJSON.map(project => (
                <PortfolioCard
                    key={project.id}
                    name={project.name}
                    link={project.link}
                    image={project.image}
                    description={project.description}
                />
            ))}
            </div>
        </section>
    );
};