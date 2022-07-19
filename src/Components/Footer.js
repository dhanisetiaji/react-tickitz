import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (<>
        <div className="container">
            <div className="row footers">
                <div className="col-md-3">
                    <img src="../../img/logo.svg" alt="logo" />
                    <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
                </div>
                <div className="col-md-3 footer">
                    <h6>Explore</h6>
                    <ul className="footer-ul" type="none">
                        <li className="footer-ul-item"><Link to={'/'}>Home</Link></li>
                        <li className="footer-ul-item"><Link to={'/movies'}>List Movie</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 footer">
                    <h6>Our Sponsor</h6>
                    <ul className="footer-ul" type="none">
                        <li className="footer-ul-item"><img src="../../img/ebv.svg" alt="ebv sponsor" /></li>
                        <li className="footer-ul-item"><img src="../../img/cineone.svg" alt="cineone sponsor" /></li>
                        <li className="footer-ul-item"><img src="../../img/hiflix.svg" alt="hiflix sponsor" /></li>
                    </ul>
                </div>
                <div className="col-md-3 footer">
                    <h6>Follow Us</h6>
                    <ul className="footer-ul" type="none">
                        <li className="footer-ul-item"><Link to={'/#'}><i className="fa-brands fa-facebook"></i> <span
                            className="socialmedia">Tickitz Cinema id</span></Link></li>
                        <li className="footer-ul-item"><Link to={'/#'}><i className="fa-brands fa-instagram"></i> <span
                            className="socialmedia">tickitz.id</span></Link></li>
                        <li className="footer-ul-item"><Link to={'/#'}><i className="fa-brands fa-twitter"></i> <span
                            className="socialmedia">tickitz.id</span></Link></li>
                        <li className="footer-ul-item"><Link to={'/#'}><i className="fa-brands fa-youtube"></i> <span
                            className="socialmedia">Tickitz Cinema id</span></Link></li>
                    </ul>
                </div>
                <div className="col-md-12 p-3 text-center">
                    <p>&copy; 2022 Tickitz. All rights reserved.</p>
                </div>
            </div>

        </div>

    </>)
}
