import React from 'react'
import Hero from '../Components/Hero/Hero'
import FreshFlowersHome from '../Components/FreshFlowersHome/FreshFlowersHome'
import ArtificialFlowersHome from '../Components/ArtificialFlowersHome/ArtificialFlowersHome'

const Home = () => {
    return (
        <div>
            <Hero/>
            <FreshFlowersHome/>
            <ArtificialFlowersHome/>
        </div>
    )
}

export default Home