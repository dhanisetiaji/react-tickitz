import axios from "axios";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';

const GetAuthRequest = () => {
    return {
        type: "GET_AUTH_REQUEST"
    };
}

const GetAuth = (data) => {
    return {
        type: "GET_AUTH",
        payload: data
    };
};

const GetAuthReg = (data) => {
    return {
        type: "GET_AUTH_REG",
        payload: data
    };
}


export const AuthLogout = () => {
    return {
        type: "AUTH_LOGOUT",
    }
}

export const GetAuthLogin = (formLogin) => {
    return (dispatch) => {
        dispatch(GetAuthRequest())
        axios({
            method: "POST",
            data: formLogin,
            url: `https://test.dhanz.me/api/v1/auth/login`,
        }).then((res) => {
            if (res.data.status === 200) {
                iziToast.success({
                    title: 'OK',
                    message: `${res.data.message}`,
                    position: 'topRight',
                });

                dispatch(GetAuth(res.data))

            }
        }).catch((err) => {
            iziToast.error({
                title: 'ERROR',
                message: `${err.response.data.message}`,
                position: 'topRight',
            });

            dispatch(GetAuth(err.response.data))
        })
    }
};

export const GetAuthRegister = (formRegister) => {
    return (dispatch) => {
        dispatch(GetAuthRequest())
        axios({
            method: "POST",
            data: formRegister,
            url: `https://test.dhanz.me/api/v1/auth/register`,
        }).then((res) => {
            if (res.data.status === 200) {
                iziToast.success({
                    title: 'OK',
                    message: `${res.data.message}`,
                    position: 'topRight',
                });

                dispatch(GetAuthReg(res.data))

            }
        }).catch((err) => {
            iziToast.error({
                title: 'ERROR',
                message: `${err.response.data.message}`,
                position: 'topRight',
            });

            dispatch(GetAuthReg(err.response.data))
        })
    }
}