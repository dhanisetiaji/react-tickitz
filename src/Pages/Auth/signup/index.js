import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from '../Components/Sidebar'
import { GetAuthRegister } from '../../../redux/actions/Auth';

export const Signup = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({})
    const { loading } = useSelector(state => state.auth);

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(GetAuthRegister(formData))
    }

    return (<>
        <div className="auths">
            <div className="row">
                <Sidebar />
                <div className="col-lg-5 p-3 pr-5">
                    <div className="row">
                        <div className="col-lg-12 mb-5 d-lg-none d-md-block">
                            <img src="../../img/logo.svg" alt="logo" />
                        </div>
                        <div className="col-lg-12">
                            <h3 className="auth-card-title">Sign Up</h3>
                            <p className="auth-card-subtitle">Fill your additional details.</p>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control p-2 mb-2" id="firstName"
                                        placeholder="Write your first name" onChange={(e) => setFormData((prevData) => ({
                                            ...prevData,
                                            firstName: e.target.value
                                        }))} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control p-2 mb-2" id="lastName"
                                        placeholder="Write your last name" onChange={(e) => setFormData((prevData) => ({
                                            ...prevData,
                                            lastName: e.target.value
                                        }))} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input type="number" className="form-control p-2 mb-2" id="phonenumber"
                                        placeholder="Write your phone number" onChange={(e) => setFormData((prevData) => ({
                                            ...prevData,
                                            phone: e.target.value
                                        }))} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control p-2 mb-2" id="email"
                                        placeholder="Write your email" onChange={(e) => setFormData((prevData) => ({
                                            ...prevData,
                                            email: e.target.value
                                        }))} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control icon-password p-2 mb-2" id="password"
                                        placeholder="Write your password" onChange={(e) => setFormData((prevData) => ({
                                            ...prevData,
                                            password: e.target.value
                                        }))} />
                                    <i id="eye-pass" toggle="#password" className="bi bi-eye-slash"></i>
                                </div>
                                {loading ? (
                                    <button className="btn btn-primary w-100 p-3" disabled><i className="fa fa-spinner fa-spin"></i></button>
                                ) : (
                                    <button className="btn btn-primary w-100 p-3">Sign Up</button>
                                )}
                            </form>
                            <p className="my-2 text-center">Already have account ? <Link to={'/auth'}>Sign in</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}
