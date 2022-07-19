import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const PublicRoute = ({ children, isLogin = false, isRestricted = false }) => {
    const navigate = useNavigate()
    const { GetAuth } = useSelector(state => state.auth)
    useEffect(() => {
        if (isLogin) {
            // console.log(isLogin, 'cek data dari redux')
            if (!GetAuth.success) {
                navigate('/auth')
            }
        }
        if (isRestricted) {
            if (GetAuth.success) {
                navigate('/', { replace: true })
            }
        }
    }, [GetAuth])
    return (children)
}

export default PublicRoute