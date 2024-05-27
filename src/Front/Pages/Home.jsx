/* eslint-disable no-unused-vars */
import React from 'react'
import HeroComponent from '../../components/Hero/Hero'
import Clients from '../../components/Clients'
import LatestProject from '../../components/OurLatest'
import FaqAccordion from '../../components/FAQ_Section'
import Collabs from '../../components/Collabs/collabs'
import ResponsiveAppBar from '../../components/Navbar/Navbar'

const Home = () => {
    return (
        <>
            <ResponsiveAppBar/>
            <HeroComponent />
            <Clients />
            <LatestProject />
            <FaqAccordion />
            <Collabs />
        </>
    )
}

export default Home