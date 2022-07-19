import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Components/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import { GetAuthLogin } from "../../../redux/actions/Auth"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { GetAuth, loading } = useSelector(state => state.auth);
    // console.log(testt)

    const [formAddData, setFormAddData] = useState({})




    useEffect(() => {
        if (GetAuth.status === 200) {
            navigate('/', { replace: true })
        }
    }, [GetAuth, navigate])

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(GetAuthLogin(formAddData))
    }
    return (<>
        <div className="auths">
            <div className="row">
                <Sidebar />
                <div className="col-lg-5 p-5 auths-card">
                    <div className="row">
                        <div className="col-lg-12 mb-5 d-lg-none d-md-block">
                            <img src="../../img/logo.svg" alt="logo" />
                        </div>
                        <div className="col-lg-12">
                            <h3 className="auth-card-title">Sign in</h3>
                            <p className="auth-card-subtitle">Sign in with your data that you entered during your registration
                            </p>
                            <form onSubmit={(e) => handleLogin(e)}>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control p-2 my-2" onChange={(e) => setFormAddData((prevData) => ({
                                        ...prevData,
                                        email: e.target.value
                                    }))}
                                        placeholder="Write your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' className="form-control p-2 my-2" onChange={(e) => setFormAddData((prevData) => ({
                                        ...prevData,
                                        password: e.target.value
                                    }))}
                                        placeholder="Write your password" required />
                                </div>
                                {loading ? (
                                    <button className="btn btn-primary w-100 p-3" disabled><i className="fa fa-spinner fa-spin"></i></button>
                                ) : (
                                    <button className="btn btn-primary w-100 p-3">Sign in</button>
                                )}
                            </form>
                            <p className="my-2 text-center">Forgot your password? <Link to={"#"}>Reset now</Link>
                            </p>
                            <p className="my-2 text-center">Don’t have an account? <Link to={"/auth/signup"}>Sign up</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}
