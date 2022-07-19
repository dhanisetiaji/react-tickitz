import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { AuthLogout } from "../redux/actions/Auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { GetAuth } = useSelector(state => state.auth)
  const { isLogin } = useSelector(state => state.auth)
  const [userInfo, setUserInfo] = useState({})
  // console.log(userInfo)
  useEffect(() => {
    if (isLogin) {
      axios.post('https://test.dhanz.me/api/v1/auth/verify-token', {
        token: GetAuth.data.token
      }).then((res) => {
        setUserInfo(res.data.data)
      }).catch((err) => {
        dispatch(AuthLogout())
      })
    }
  }, [dispatch, isLogin])
  // console.log(userInfo)
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2 mb-3">
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
                <Link to={"/"} className="nav-link bottom-text">Home</Link>
              </li>
              {userInfo.role === 'Admin' ? <li className="nav-item" id="sign-in"><Link to={"/admin"} className="nav-link bottom-text">Admin Dashboard</Link></li> : null}
              <li className="nav-item">
                <Link to={"/movies"} className="nav-link bottom-text">List Movie</Link>
              </li>
              <li className="nav-item" id="sign-in">
                {!isLogin ? (
                  <Link to={"/auth"} className="nav-link bottom-text">Sign In</Link>
                ) : (
                  <span className="nav-span bottom-text" onClick={() => dispatch(AuthLogout())}>Sign Out</span>
                )}

              </li>
              <li className="nav-item footernav">
                <span> &copy; 2022 Tickitz. All Right Reserved. </span>
              </li>
            </ul>
            {!isLogin ? (
              <form className="d-flex">
                <Link to={'/auth/signup'} className="text-decoration-none text-white"><button className="btn btn-primary" id="sign-up" type="submit">Sign Up</button></Link>
              </form>
            ) : (
              <div className="btn-group profile-dekstop">
                <a role='button' className="img-profile" href='/#' id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="rounded-circle" src="../../img/profile.png" alt="profile" />
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownCenterBtn">
                  {userInfo.role === 'Admin' ? (<>
                    <li><Link to={`/admin`} className="dropdown-item">Admin Dashboard</Link></li>
                    <li><Link to={`/admin/profile`} className="dropdown-item">Profile</Link></li>
                  </>
                  ) : (
                    <li><Link to={`/user/profile`} className="dropdown-item">Profile</Link></li>
                  )}
                  <li><span onClick={() => dispatch(AuthLogout())} className="dropdown-item">Logout</span></li>
                </ul>
              </div>
            )}

          </div>
        </div>
      </nav>
    </>
  )
}
