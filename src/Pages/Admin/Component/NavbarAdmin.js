import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg mt-2 mb-5">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/"><img src="../../img/logo.svg" alt="logo" /></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <img src="../../img/toggle.svg" alt="toggle" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link bottom-text" id="admin">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/admin/movie"} className="nav-link bottom-text" id="admin">Movie</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/admin/cinema"} className="nav-link bottom-text" id="admin">Cinema</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/auth/signin"} className="nav-link bottom-text" id="admin">Logout</Link>
                            </li>
                            <li className="nav-item footernav">
                                <span> &copy; 2022 Tickitz. All Right Reserved. </span>
                            </li>
                        </ul>
                        {/* <form className="d-flex">

                        </form> */}

                        <div className="btn-group profile-dekstop">
                            <a role='button' className="img-profile" href='/#' id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="rounded-circle" src="../../img/profile.png" alt="profile" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownCenterBtn">
                                <li><Link to={'/admin/profile'} className="dropdown-item">Profile</Link></li>
                                <li><Link to={'/logout'} className="dropdown-item">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
