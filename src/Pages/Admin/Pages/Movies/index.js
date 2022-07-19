import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AddMovies, DeleteMovie, EditMovies, GetMovies } from "../../../../redux/actions/Movies"
import { useSearchParams } from "react-router-dom"
import MetaTags from '../../Component/Metatags'
import { Navbar } from '../../Component/NavbarAdmin'
import { Sidebar } from '../../Component/Sidebar'
import Swal from 'sweetalert2'
import moment from 'moment'

export const MoviesAdmin = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams()

    const [params, setParams] = useState({
        page: query.get('page') ?? 1,
        limit: 5,
        orderBy: 'asc'
    })

    const [formData, setFormData] = useState({
        title: '',
        synopsis: '',
        release_date: '',
        genre: '',
        duration: '',
        directed_by: '',
        cast: '',
    })

    const bodyFormData = new FormData()
    // Object.keys(formData).forEach(key => bodyFormData.append(key, formData[key]))
    bodyFormData.set('title', formData.title)
    bodyFormData.set('genre', formData.genre)
    bodyFormData.set('release_date', formData.release_date)
    bodyFormData.set('directed_by', formData.directed_by)
    bodyFormData.set('duration', formData.duration)
    bodyFormData.set('cast', formData.cast)
    bodyFormData.set('synopsis', formData.synopsis)
    bodyFormData.set('image', formData.image)
    // for (const value of bodyFormData.values()) {
    //     console.log(value);
    // }
    // console.log(bodyFormData)
    const { getMovieList, loading } = useSelector((state) => state.movies);
    const { MovieCUD } = useSelector((state) => state.movies);
    const { GetAuth } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(GetMovies(params))
    }, [dispatch, params, MovieCUD]) // eslint-disable-line



    let totalPage = Array(getMovieList.totalPage).fill() ?? []

    const addmovie = async () => {
        document.getElementById('modal-title').innerHTML = 'Add Movie'
        // document.getElementById('InputImage').get(0).reset()
        // document.getElementById('InputImage').get(0).value = ''
        setFormData({
            title: '',
            synopsis: '',
            release_date: '',
            genre: '',
            duration: '',
            directed_by: '',
            cast: '',
        })

    }

    const editmovie = async (movie) => {
        // console.log(movie)
        document.getElementById('modal-title').innerHTML = 'Edit Movie'
        setFormData({
            ...movie,
            release_date: moment(movie.release_date).format('YYYY-MM-DD'),
        })

    }

    const deletemovie = async (id) => {
        dispatch(DeleteMovie(GetAuth.data.token, id))
    }

    const searchHandler = async (e) => {
        e.preventDefault()
        const search = e.target.value
        setParams({
            ...params,
            q: search,
        })
    }


    const handleMovie = async (e) => {
        e.preventDefault()

        try {
            if (!formData.id) {
                dispatch(AddMovies(GetAuth.data.token, bodyFormData))
                // setRefetch(!refetch)
            }
            else {
                dispatch(EditMovies(GetAuth.data.token, bodyFormData, formData.id))

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

    const handlePaginate = (page) => {
        setParams((prevState) => ({ ...prevState, page }))
        query.set('page', page)
        setQuery(query)
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
                                                    <th scope='col'>Title</th>
                                                    <th scope='col'>Genre</th>
                                                    <th scope='col'>Duration</th>
                                                    <th scope='col'>Release Date</th>
                                                    <th scope='col'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ? <tr><td colSpan='6' className='text-center'>Loading...</td></tr> : !getMovieList.results.length ? <tr><td colSpan='6' className='text-center'>Empty Data</td></tr> : getMovieList.results.map((movie, index) => {
                                                    return (<tr key={index}>
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
                                        <nav aria-label="pagination">
                                            <ul className="pagination justify-content-center">
                                                {totalPage.map((item, index) => {
                                                    let number = index + 1
                                                    let page = parseInt(params.page)
                                                    return (
                                                        <li className={page === number ? 'page-item active' : 'page-item'} key={index}>
                                                            <button className="page-link" onClick={() => handlePaginate(number)}>{number}</button>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </nav>
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
                    <form id='form' encType='multipart/form-data' onSubmit={(e) => handleMovie(e)}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="InputTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="InputTitle" value={formData.title} onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, title: e.target.value }))
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputImage" className="form-label">image</label>
                                <input type="file" className="form-control" id="InputImage" onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, image: e.target.files[0] }))
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
