import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { AuthLogout } from "../redux/actions/Auth";

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { GetAuth } = useSelector(state => state.auth)

    useEffect(() => {
        if (!GetAuth.data.token) {
            navigate('/auth')
        } else {
            axios.post('https://test.dhanz.me/api/v1/auth/verify-token', {
                token: GetAuth.data.token
            }).then((res) => {
                // console.log(res.data.data.role)
                if (res.data.data.role === 'Admin') {
                    // navigate(`/admin`)
                } else {
                    navigate('/')
                }
            }).catch((err) => {
                dispatch(AuthLogout())
            })
        }

    }, [GetAuth]) // eslint-disable-line react-hooks/exhaustive-deps
    return (children)
}

export default PrivateRoute