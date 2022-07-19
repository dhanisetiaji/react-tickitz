import axios from "axios";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';
import Swal from "sweetalert2";

const GetMoviesRequest = () => {
    return {
        type: "GET_MOVIES_REQUEST",
    };
};

const GetMoviesList = (data) => {
    return {
        type: "GET_MOVIES_LIST",
        payload: data
    };
};

const GetMoviesByDate = (data) => {
    return {
        type: "GET_MOVIES_BY_DATE",
        payload: data
    };
};


const PostMovie = (data) => {
    return {
        type: "POST_MOVIE_CUD",
        payload: data
    };
}


export const GetMovies = ({ orderBy, page = 1, limit, q }) => {
    return (dispatch) => {
        dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            url: `https://test.dhanz.me/api/v1/movies${q ? `?q=${q}` : '?q='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
        }).then((res) => { //ketika sukses, dispatch sucess
            dispatch(GetMoviesList(res.data.data)) //trigger / dispatch
        }).catch((err) => {
            dispatch(GetMoviesList(err))
        })
    }
};

export const GetMoviesDate = (now) => {
    return (dispatch) => {
        dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            url: `https://test.dhanz.me/api/v1/movies${now ? `?date=${now}` : ''}`,
        }).then((res) => { //ketika sukses, dispatch sucess
            dispatch(GetMoviesByDate(res.data.data)) //trigger / dispatch
        }).catch((err) => {
            dispatch(GetMoviesByDate(err))
        })
    }
};

export const AddMovies = (token, data) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: `https://test.dhanz.me/api/v1/movies`,
            data: data,
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => {
            dispatch(PostMovie(res.data))
            iziToast.success({
                title: 'OK',
                message: `${res.data.message}`,
                position: 'topRight',
            });
        }).catch((err) => {
            dispatch(PostMovie(err))
            iziToast.error({
                title: 'Error',
                message: `${err.response.data.message}`,
                position: 'topRight',
            })
        })
    }
}

export const EditMovies = (token, data, id) => {
    // console.log(data.id)
    return (dispatch) => {
        axios({
            method: "PATCH",
            url: `https://test.dhanz.me/api/v1/movies/${id}`,
            data: data,
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => {
            dispatch(PostMovie(res.data))
            iziToast.success({
                title: 'OK',
                message: `${res.data.message}`,
                position: 'topRight',
            });
        }).catch((err) => {
            dispatch(PostMovie(err))
            iziToast.error({
                title: 'Error',
                message: `${err.response.data.message}`,
                position: 'topRight',
            })
        })

    }
}

export const DeleteMovie = (token, id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: "DELETE",
                    url: `https://test.dhanz.me/api/v1/movies/${id}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    dispatch(PostMovie(res.data))
                    iziToast.success({
                        title: 'OK',
                        message: `${res.data.message}`,
                        position: 'topRight',
                    });
                }).catch((err) => {
                    dispatch(PostMovie(err))
                    iziToast.error({
                        title: 'Error',
                        message: `${err.response.data.message}`,
                        position: 'topRight',
                    })
                })
                // axios({
                //     method: 'delete',
                //     url: `${process.env.REACT_APP_URL_API}/movies/${id}`,
                // }).then(res => {
                //     Swal.fire(
                //         'Deleted!',
                //         'Your file has been deleted.',
                //         'success'
                //     )
                //     setRefetch(!refetch)
                // }).catch(err => {
                //     Swal.fire(
                //         'Error!',
                //         'Something went wrong.',
                //         'error'
                //     )
                // })
            }
        })

    }
}