import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2 mb-5">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/"><img src="./img/logo.svg" alt="logo" /></Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <img src="./img/toggle.svg" alt="toggle" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link bottom-text">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/movies"} className="nav-link bottom-text">List Movie</Link>
              </li>
              <li className="nav-item" id="sign-in">
                <Link to={"/auth/signin"} className="nav-link bottom-text">Sign In</Link>
              </li>
              <li className="nav-item footernav">
                <span> &copy; 2022 Tickitz. All Right Reserved. </span>
              </li>
            </ul>
            <form className="d-flex">
              <Link to={'/admin'} className="text-decoration-none text-white"><button className="btn btn-primary" id="sign-up" type="submit">Sign Up</button></Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
