import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Loading = () => {
    return (
        <>
            <SectionTitle title="Now Showing" />
            <div>loading ....</div>
        </>
    )
}

const EmptyState = ({ title = "No Data Found.", headerTitle = "", HeaderComponent = <SectionTitle title="Now Showing" />, icon = "https://st3.depositphotos.com/16138592/32064/v/950/depositphotos_320646944-stock-illustration-document-cross-sign-magnifier-data.jpg?forcejpeg=true" }) => {
    return (
        <div>
            {headerTitle ? <SectionTitle title={headerTitle} /> : HeaderComponent}
            <img width={200} src={icon} alt="empty" />
            <h6>{title}</h6>
        </div>
    )
}

const SectionTitle = ({ title, to = '/movies' }) => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-6">
                    <p className="text-nowshowing">{title}</p>
                </div>
                <div className="col-6 text-end">
                    <Link to={to} className="fw-bolder text-decoration-none">view all</Link >
                </div>
            </div>
        </div>
    )
}

export const NowShowing = ({ isAdmin = false }) => {
    const [movieSchedule, setMovieSchedule] = useState({
        loading: false,
        results: {
            data: []
        }
    })

    //add
    const [refetch, setRefetch] = useState(false)
    const [formAddData, setFormAddData] = useState({
        title: "",
        genre: "",
        release_date: "",
        directed_by: "",
        duration: "",
        cast: "",
        synopsis: "",
        image: "",
    })
    const [formEditData, setFormEditData] = useState({})
    const [query, setQuery] = useState({
        title: "",
        sortBy: "",
        orderBy: "",
    })
    console.log(formEditData, 'ehehehhe')

    useEffect(() => {
        const { title, sortBy, orderBy } = query
        setMovieSchedule((prevState) => ({
            ...prevState,
            loading: true
        }))
        axios({
            method: 'GET',
            url: `https://test.dhanz.me/api/v1/movies
            ${title ? `?title=${title}` : ''}
            ${sortBy ? `?sortBy=${sortBy}` : ''}
            ${orderBy ? `&orderBy=${orderBy}` : ''}`,
        }).then((res) => {
            // console.log()
            setMovieSchedule({
                loading: false,
                results: res.data
            })
        })
            .catch((err) => {
                console.log(err)
            })
    }, [refetch, query])

    //useEffect akan dipanggil ketika component di render, load satu kali saja
    // useEffect  ada dependency array [] = load satu kali saja
    // [refetch] = depnedencies, ketika ada perubahan di refetch, maka useEffect akan dipanggil kembali
    if (isAdmin) {
        const handleAddMovie = async (e) => {
            e.preventDefault()
            try {
                const result = await axios({
                    method: 'POST',
                    data: formAddData,
                    url: 'https://test.dhanz.me/api/v1/movies/',
                })
                if (result.data.status === 200) {
                    alert('Successfully Added')
                    setRefetch(!refetch)
                } else {
                    alert('Failed, Try Again')
                }

            } catch (error) {
                alert(error.response.data.message)
                console.log(error)

            }
        }
        const handleDelete = (id) => {
            if (window.confirm('Are you sure?')) {
                axios({
                    method: 'DELETE',
                    url: `https://test.dhanz.me/api/v1/movies/${id}`
                }).then((res) => {
                    alert(res.data.message)
                    setRefetch(!refetch)
                }).catch((error) => {
                    alert(error.response.data.message)
                })
            }
        }
        const handleEdit = (prevData) => {
            setFormEditData({
                ...prevData,
                release_date: moment(prevData.release_date).format('YYYY-MM-DD')
                // release_date: new Date(prevData.release_date).toISOString().slice(0, 10)
            })
        }
        const handleUpdateMovie = async (e) => {
            e.preventDefault()
            try {
                const result = await axios({
                    method: 'PATCH',
                    data: formEditData,
                    url: `https://test.dhanz.me/api/v1/movies/${formEditData.id}/`,
                })
                if (result.data.status === 200) {
                    alert('Successfully Added')
                    setRefetch(!refetch)
                } else {
                    alert('Failed, Try Again')
                }

            } catch (error) {
                alert(error.response.data.message)
                console.log(error)

            }
        }
        console.log(formEditData, 'edit')
        return (
            <div className="now-showing">
                <input placeholder='Search' onChange={(e) => {
                    console.log(e, 'ehehehe')
                    setQuery(prevData => ({
                        ...prevData,
                        title: e.target.value
                    }))
                }} />
                <select class="form-select" aria-label="Default select example" onSelect={(e) => {
                    setQuery(prevData => ({
                        ...prevData,
                        sorBy: e.target.value
                    }))
                }}>
                    <option selected>Title</option>
                    <option value="1">Genre</option>
                    <option value="2">Date</option>
                </select>
                <select class="form-select" aria-label="Default select example" onSelect={(e) => {
                    setQuery(prevData => ({
                        ...prevData,
                        orderBy: e.target.value
                    }))
                }}>
                    <option selected>ASC</option>
                    <option value="1">DSC</option>
                </select>
                <SectionTitle title="Now Showing" />

                <button className="btn btn-primary btn-sm"
                    data-bs-toggle="modal" data-bs-target="#addNewMovie"
                >Add New Movie</button>

                <div className="cards-movie">
                    {movieSchedule.results.data.map((movie, index) => {
                        return (
                            <div className="card-movie" key={index}>
                                <img className="card-movie-list"
                                    src={`${movie.image}`} alt={movie.title} title={movie.title} />

                                <button className="btn btn-secondary btn-sm" onClick={() => handleEdit(movie)} data-bs-toggle="modal" data-bs-target="#editMovie">Edit</button>
                                <button className='btn btn-danger btn-sm' onClick={() => handleDelete(movie.id)}>Delete</button>
                            </div>

                        )
                    })}
                </div>
                {/* ADD MOVIES */}
                <div class="modal fade" id="addNewMovie" tabindex="-1" aria-labelledby="addNewMovieLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addNewMovieLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={(e) => handleAddMovie(e)}>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, title: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">image</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, image: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Release Date</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, release_date: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Duration</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, duration: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Director</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, directed_by: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Casts</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, cast: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Genre</label>
                                        <input class="form-control" id="exampleInputPassword1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, genre: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Synopsis</label>
                                        <textarea rows={10} class="form-control" id="exampleInputPassword1" onChange={(e) => {
                                            setFormAddData(prevState => ({ ...prevState, synopsis: e.target.value }))
                                        }} />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={(e) => handleAddMovie(e)}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* EDIT MOVIES */}
                <div class="modal fade" id="editMovie" tabindex="-1" aria-labelledby="editMovieLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editMovieLabel">Edit Movies</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={(e) => handleUpdateMovie(e)}>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" value={formEditData.title} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, title: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">image</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.image} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, image: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Release Date</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.release_date} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, release_date: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Duration</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.duration} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, duration: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Director</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.directed_by} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, directed_by: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Casts</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.cast} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, cast: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Genre</label>
                                        <input class="form-control" id="exampleInputPassword1" value={formEditData.genre} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, genre: e.target.value }))
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Synopsis</label>
                                        <textarea rows={10} class="form-control" id="exampleInputPassword1" value={formEditData.synopsis} onChange={(e) => {
                                            setFormEditData(prevState => ({ ...prevState, synopsis: e.target.value }))
                                        }} />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={(e) => handleUpdateMovie(e)}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        if (movieSchedule.loading) {
            return <Loading />
        }
        if (!movieSchedule.results.data.length) {
            return <EmptyState title='Now Showing' />
        }
        return (
            <div className="now-showing">
                <SectionTitle title="Now Showing" />
                <div className="cards-movie">
                    {movieSchedule.results.data.map((movie, index) => {
                        return (
                            <div className="card-movie" key={index}>
                                <img className="card-movie-list"
                                    src={`${movie.image}`} alt={movie.title} title={movie.title} />
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }

}


// v1. cuma get biasa dengan length dicek apa ada atau engga -> bug = ketika datanya kosong = loading ...
// v2. kondisi ketika datanya kosong, loading, dan ada
// v3. harus pake komponent, daripada kita bikin ternary operator, kita bukin komponnet loading, dengan kompnnet lain yang misalkan memang dibutuhkan