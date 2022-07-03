import React from 'react'
import MetaTags from '../../Component/Metatags'
import { Navbar } from '../../Component/NavbarAdmin'

export const CinemaAdmin = () => {
    return (<>
        <MetaTags title="Tickitz - Dashboard Admin" />
        <body id="page-top">
            <div id="wrapper">
                <Navbar />
            </div>
        </body>
    </>)
}
