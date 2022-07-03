import React, { useEffect } from 'react'
import { Navbar } from '../../Components/Navbar'
import { Banner } from './Components/Banner'
import { NowShowing } from './Components/NowShowing'
import './style.css'

const Home = () => {
    useEffect(() => {
        document.title = "Tickitz - Home"
    })

    return (<>
        <Navbar />
        <main>
            <Banner />
            <NowShowing isAdmin={true} />
        </main>
    </>)
}

export default Home