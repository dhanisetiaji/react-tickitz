import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MetaTags from '../../Component/Metatags'
import { Navbar } from '../../Component/NavbarAdmin'
import { Sidebar } from '../../Component/Sidebar'
import Swal from 'sweetalert2'
import moment from 'moment'

export const MoviesAdmin = () => {
    const [movies, setMovies] = useState({
        loading: true,
        results: {
            data: []
        },
    })
    const [refetch, setRefetch] = useState(false)
    const [formData, setFormData] = useState({
        id: '',
        title: "",
        genre: "",
        release_date: "",
        directed_by: "",
        duration: "",
        cast: "",
        synopsis: "",
        image: "",
    })

    useEffect(() => {

        setMovies((prevState) => ({
            ...prevState,
            loading: true
        }))

        axios({
            method: 'get',
            url: `${process.env.REACT_APP_URL_API}/movies`,
        }).then(res => {
            setMovies({
                loading: false,
                results: res.data,
            })

        }).catch(err => {
            console.log(err)
        })
    }, [refetch])

    const addmovie = async () => {
        document.getElementById('modal-title').innerHTML = 'Add Movie'
        setFormData({
            title: "",
            genre: "",
            release_date: "",
            directed_by: "",
            duration: "",
            cast: "",
            synopsis: "",
            image: "",
        })

    }

    const editmovie = async (movie) => {
        document.getElementById('modal-title').innerHTML = 'Edit Movie'
        setFormData({
            ...movie,
            release_date: moment(movie.release_date).format('YYYY-MM-DD'),
        })

    }

    const deletemovie = async (id) => {
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
                    method: 'delete',
                    url: `${process.env.REACT_APP_URL_API}/movies/${id}`,
                }).then(res => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setRefetch(!refetch)
                }).catch(err => {
                    console.log(err)
                })
            }
        })
    }

    const searchHandler = async (e) => {
        e.preventDefault()
        const search = e.target.value
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_API}/movies?q=${search}`,
        }).then(res => {
            setMovies({
                loading: false,
                results: res.data,
            })
            // console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    const handleMovie = async (e) => {
        e.preventDefault()
        try {
            if (!formData.id) {
                const result = await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_URL_API}/movies`,
                    data: formData,
                })
                if (result.data.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: `${result.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setRefetch(!refetch)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: `${result.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }
            else {
                const result = await axios({
                    method: 'PATCH',
                    url: `${process.env.REACT_APP_URL_API}/movies/${formData.id}`,
                    data: formData,
                })
                if (result.data.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: `${result.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setRefetch(!refetch)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: `${result.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
            })
        }


    }



    return (<>
        <MetaTags title="Tickitz - Movie Admin" />
        <Navbar />
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <Sidebar />
                </div>
                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-12 mb-3'>
                            <div className='card shadow'>
                                <div className='card-body d-flex justify-content-between'>
                                    <h3 className='fw-bold p-auto'>MOVIE</h3>
                                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalmovie" onClick={() => addmovie()}>Add Movie</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-12'>
                            <div className='card shadow admin-body'>
                                <div className='card-body'>
                                    <div className="search-box">
                                        <button className="btn-search"><i className="fas fa-search"></i></button>
                                        <input type="text" className="input-search" onChange={(e) => searchHandler(e)} placeholder="Type to Search..." />
                                    </div>
                                    <div className='table-responsive'>
                                        <table className='table table-striped table-hover'>
                                            <thead>
                                                <tr>
                                                    <th scope='col'>#</th>
                                                    <th scope='col'>Title</th>
                                                    <th scope='col'>Genre</th>
                                                    <th scope='col'>Duration</th>
                                                    <th scope='col'>Release Date</th>
                                                    <th scope='col'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {movies.loading ? <tr><td colSpan='6' className='text-center'>Loading...</td></tr> : !movies.results.data.length ? <tr><td colSpan='6' className='text-center'>Empty Data</td></tr> : movies.results.data.map((movie, index) => {
                                                    return (<tr key={index}>
                                                        <th scope='row'>{index + 1}</th>
                                                        <td>{movie.title}</td>
                                                        <td>{movie.genre}</td>
                                                        <td>{movie.duration}</td>
                                                        <td>{movie.release_date}</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-primary mx-2' data-bs-toggle="modal" data-bs-target="#modalmovie" onClick={() => editmovie(movie)}><i className='fa fa-pen-to-square'> </i> </button>
                                                                <button className='btn btn-danger' onClick={() => deletemovie(movie.id)}><i className='fa fa-trash'> </i></button>
                                                            </div>
                                                        </td>
                                                    </tr>)
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="modalmovie" tabIndex="-1" aria-labelledby="modalmovie" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id='form' onSubmit={(e) => handleMovie(e)}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="InputTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="InputTitle" value={formData.title} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, title: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputImage" className="form-label">image</label>
                                <input type="text" className="form-control" id="InputImage" value={formData.image} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, image: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputDate" className="form-label">Release Date</label>
                                <input type="date" className="form-control" id="InputDate" value={formData.release_date} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, release_date: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputDuration" className="form-label">Duration</label>
                                <input type="text" className="form-control" id="InputDuration" value={formData.duration} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, duration: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputDirector" className="form-label">Director</label>
                                <input type="text" className="form-control" id="inputDirector" value={formData.directed_by} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, directed_by: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputCasts" className="form-label">Casts</label>
                                <input type="text" className="form-control" id="InputCasts" value={formData.cast} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, cast: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputGenre" className="form-label">Genre</label>
                                <input className="form-control" id="InputGenre" value={formData.genre} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, genre: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputSynopsis" className="form-label">Synopsis</label>
                                <textarea rows={10} className="form-control" id="InputSynopsis" value={formData.synopsis} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, synopsis: e.target.value }))
                                }} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={(e) => handleMovie(e)} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
