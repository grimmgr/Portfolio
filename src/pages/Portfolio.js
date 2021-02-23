import React from 'react';
// import { useWidth } from '../utils/widthContext';
import { PortfolioCard } from '../components/PortfolioCard';
import portfolioJSON from '../portfolio.json';

export const Portfolio = () => {
    // const width = useWidth().width;
    return (
        <section id='portfolio'>
            {/* { (width >= 700) &&
                 <div className='portfolio-header'>
                    <h2>PORTFOLIO</h2>
                </div>
            } */}
            <div className='portfolio-container'>
                <div className='transparent'></div>
                <div id='card-wrapper0' className='card-wrapper'>
                    <div id='card0' className='card'>
                        <div className='cover'>
                            <p className='symbol' id='arrow'>&#187;</p>
                            <h2>PORTFOLIO</h2>
                        </div>
                    </div>
                </div>
                <div className='transparent'></div>
                <PortfolioCard
                    key={portfolioJSON[0].id}
                    id={portfolioJSON[0].id}
                    name={portfolioJSON[0].name}
                    link={portfolioJSON[0].link}
                    github={portfolioJSON[0].github}
                    image={portfolioJSON[0].image}
                    description={portfolioJSON[0].description}
                />
                <div className='transparent'></div>
                <PortfolioCard
                    key={portfolioJSON[1].id}
                    id={portfolioJSON[1].id}
                    name={portfolioJSON[1].name}
                    link={portfolioJSON[1].link}
                    github={portfolioJSON[1].github}
                    image={portfolioJSON[1].image}
                    description={portfolioJSON[1].description}
                />
                <div className='transparent'></div>
                <PortfolioCard
                    key={portfolioJSON[2].id}
                    id={portfolioJSON[2].id}
                    name={portfolioJSON[2].name}
                    link={portfolioJSON[2].link}
                    github={portfolioJSON[2].github}
                    image={portfolioJSON[2].image}
                    description={portfolioJSON[2].description}
                />
                <div className='transparent'></div>
                <PortfolioCard
                    key={portfolioJSON[3].id}
                    id={portfolioJSON[3].id}
                    name={portfolioJSON[3].name}
                    link={portfolioJSON[3].link}
                    github={portfolioJSON[3].github}
                    image={portfolioJSON[3].image}
                    description={portfolioJSON[3].description}
                />
                <div className='transparent'></div>
                <PortfolioCard
                    key={portfolioJSON[4].id}
                    id={portfolioJSON[4].id}
                    name={portfolioJSON[4].name}
                    link={portfolioJSON[4].link}
                    github={portfolioJSON[4].github}
                    image={portfolioJSON[4].image}
                    description={portfolioJSON[4].description}
                />
                <div className='transparent'></div>
                <PortfolioCard
                    key={portfolioJSON[5].id}
                    id={portfolioJSON[5].id}
                    name={portfolioJSON[5].name}
                    link={portfolioJSON[5].link}
                    github={portfolioJSON[5].github}
                    image={portfolioJSON[5].image}
                    description={portfolioJSON[5].description}
                />
                <div className='transparent'></div>
                <div id='card-wrapper7' className='card-wrapper'>
                    <div id='card7' className='card'>
                        <div className='cover'>
                            <p className='symbol' id='arrow'>&#187;</p>
                            <h2>BACK TO TOP</h2>
                        </div>
                    </div>
                </div>

            {/* { portfolioJSON.map(project => (
                <PortfolioCard
                    key={project.id}
                    name={project.name}
                    link={project.link}
                    github={project.github}
                    image={project.image}
                    description={project.description}
                />
            ))} */}
            </div>
        </section>
    );
};