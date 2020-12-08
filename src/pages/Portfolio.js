import React from 'react';
import { useWidth } from '../utils/widthContext';
import { PortfolioCard } from '../components/PortfolioCard';
import portfolioJSON from '../portfolio.json';

export const Portfolio = () => {
    const width = useWidth().width;
    return (
        <section id='portfolio'>
            { (width >= 700) &&
                 <div className='portfolio-header'>
                    <h2>PORTFOLIO</h2>
                </div>
            }
            <div className='portfolio-wrapper'>
                { (width < 700) &&
                    <div id='cover-wrapper' className='card-wrapper'>
                        <div id='cover-card' className='card'>
                            <div className='title-wrapper'>
                                <h2>PORTFOLIO</h2>
                                <p id='arrow'>&#8656;</p>
                                <p className='emoji'>ヾ(･ε･*)ﾉﾞ<span id='go'>=з</span></p>
                            </div>
                        </div>
                </div> }

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