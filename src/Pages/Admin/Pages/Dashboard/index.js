import React from 'react'
import { Navbar } from '../../Component/NavbarAdmin'
import { Sidebar } from '../../Component/Sidebar'
import MetaTags from './../../Component/Metatags'

export const DashboardAdmin = () => {
    return (<>
        <MetaTags title="Tickitz - Dashboard Admin" />
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
