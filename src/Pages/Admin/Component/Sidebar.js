import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (<>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 d-none d-lg-block'>
                    <div className='card shadow'>
                        <div className='card-body align-self-center text-center my-3'>
                            <h3 className='fw-bold mb-5'>ADMIN AREA</h3>
                            <Link to={'/admin'} className='text-black text-decoration-none'>Dashboard</Link>
                            <hr />
                            <Link to={'/admin/movie'} className='text-black text-decoration-none'>Movie</Link>
                            <hr />
                            <Link to={'/admin/cinema'} className='text-black text-decoration-none'>Cinema</Link>
                            <hr />
                            <Link to={'/admin/users'} className='text-black text-decoration-none'>Users</Link>
                            <hr />
                            <Link to={'/admin/setting'} className='text-black text-decoration-none'>Setting</Link>
                            <hr />
                            <Link to={'/logout'} className='text-black text-decoration-none'>Log out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
