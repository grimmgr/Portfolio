import React from 'react';
import './style.css';

export const Background = () => {
    return (
        <div>
            <video playsInline autoPlay loop muted poster="assets/images/portfolio_background_poster.jpg" id="backgroundVideo">
                <source src="assets/video/portfolio_background_720.webm" type="video/webm" />
                <source src="assets/video/portfolio_background_720.mp4" type="video/mp4" />
            </video>

            <div id="background"></div>
        </div>
    )
}