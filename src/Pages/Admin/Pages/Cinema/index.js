import React from 'react'
import MetaTags from '../../Component/Metatags'
import { Navbar } from '../../Component/NavbarAdmin'
import { Sidebar } from '../../Component/Sidebar'

export const CinemaAdmin = () => {
    return (<>
        <MetaTags title="Tickitz - Cinema Admin" />
        <Navbar />
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <Sidebar />
                </div>
                <div className='col-8'>

                </div>
            </div>
        </div>
    </>)
}
