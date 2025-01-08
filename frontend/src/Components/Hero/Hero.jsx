import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import front_home from '../Assets/front_home.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <p>New</p>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="front_home">
                <img src={front_home} alt="" />
            </div>
        </div>
    )
}

export default Hero