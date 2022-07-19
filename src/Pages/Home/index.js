import React from 'react'
import { Navbar } from '../../Components/Navbar'
import { Banner } from './Components/Banner'
import { NowShowing } from './Components/NowShowing'
import { Upcoming } from './Components/Upcoming'
import { FormJoin } from './Components/FormJoin'
import { Footer } from '../../Components/Footer'
import MetaTags from '../../Components/Metatags'
import './style.css'

const Home = () => {
    return (<>
        <MetaTags title="Tickitz - Home" />
        <Navbar />
        <main>
            <Banner />
            <NowShowing />
            <Upcoming />
            <FormJoin />
        </main>
        <Footer />
    </>)
}

export default Home