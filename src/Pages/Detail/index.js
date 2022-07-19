import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../../Components/Footer'
import LoaderMovie from '../../Components/LoaderMovie'
import { Navbar } from '../../Components/Navbar'
import { getMovieById } from '../../redux/actions/Schedules'
import './detail.css'

export const DetailMovie = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    let { id } = useParams();



    useEffect(() => {
        if (id === undefined) {
            navigate('/')
        }
        dispatch(getMovieById(id))
    }, [dispatch])

    const { movies } = useSelector((state) => state.schedule);
    console.log(movies.data)

    return (<>
        <Navbar />
        <div className="detail">
            <div className="container">
                {movies.data === undefined ? <LoaderMovie /> : (
                    <div className="row">
                        <div className="col-md-4 detail-movie-img">
                            <img className="card-img-rounded" src={`${process.env.REACT_APP_URL_IMG}/${movies.data[0].image}`} alt="banner" />
                        </div>
                        <div className="col-md-8">
                            <div className="row detail-movie-item">
                                <div className="col-md-12 detail-movie-title detail-movie-title-center">
                                    <h3 className="title-detail">{movies.data[0].title}</h3>
                                    <p className="genre-detail">{movies.data[0].genre}</p>
                                </div>
                                <div className="col-6 detail-movie-title">
                                    <p className="text-detail">Release date</p>
                                    <p className="text-detail-desc">{movies.data[0].release_date}</p>
                                </div>
                                <div className="col-6 detail-movie-title">
                                    <p className="text-detail">Directed by</p>
                                    <p className="text-detail-desc">{movies.data[0].directed_by}</p>
                                </div>
                                <div className="col-6 detail-movie-title">
                                    <p className="text-detail">Duration</p>
                                    <p className="text-detail-desc">{movies.data[0].duration}</p>
                                </div>
                                <div className="col-6 detail-movie-title">
                                    <p className="text-detail">Casts</p>
                                    <p className="text-detail-desc">{movies.data[0].cast}</p>
                                </div>
                                <hr />
                                <div className="col-12">
                                    <h4 className="synopsis">Synopsis</h4>
                                    <p className="synopsis-detail">{movies.data[0].synopsis}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* {loading ? <LoaderMovie /> : } */}

            </div>
            <div className="row showtime-ticket justify-content-center text-center">
                <div className="col-12">
                    <h4 className="showtime-title">Showtimes and Tickets</h4>
                </div>
                <div className="col-12 p-5 w-auto">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-sm-6 mb-2">
                            <div className="input-group">
                                <label className="input-group-text" htmlFor=""><i className="fa-solid fa-calendar-days"></i></label>
                                <select className="form-select" defaultValue={'default'} aria-label="Filter select">
                                    <option defaultValue={'default'} disabled>21/01/2022</option>
                                    <option value={"1"}>21/01/2022</option>
                                    <option value={"2"}>21/01/2022</option>
                                    <option value={"3"}>21/01/2022</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-sm-6 mb-2">
                            <div className="input-group">
                                <label className="input-group-text" htmlFor=""><i className="fa-solid fa-map-pin"></i></label>
                                <select className="form-select" defaultValue={'default'} aria-label="Filter select">
                                    <option defaultValue={'default'}>Purwokerto</option>
                                    <option value="1">Jakarta</option>
                                    <option value="2">Bandung</option>
                                    <option value="3">Yogyakarta</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card shadow mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6 align-self-center">
                                                <img className="box-cinema" src="../../img/ebv.svg" alt="cinema" />
                                            </div>
                                            <div className="col-6 mb-2">
                                                <h4 className="text-cinema">ebv.id</h4>
                                                <p className="text-address">Whatever street No.12, South Purwokerto</p>
                                            </div>
                                            <hr />
                                            <div className="col-3">
                                                <p className="text-time">08:30am</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">10:30pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time sold">12:00pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">02:00pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">08:30am</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time sold">10:30pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">12:00pm</p>
                                            </div>
                                            <div className="col-6 py-3">
                                                <p className="text-price">Price</p>
                                            </div>
                                            <div className="col-6 py-3">
                                                <p className="text-price-item">$10.00/seat</p>
                                            </div>
                                            <div className="col-12 mb-2">
                                                <Link type="button" to={'/#'}
                                                    className="btn btn-primary w-100 shadow">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card shadow mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6 align-self-center">
                                                <img className="box-cinema" src="../../img/cineone.svg" alt="cinema" />
                                            </div>
                                            <div className="col-6 mb-2">
                                                <h4 className="text-cinema">CineOne21</h4>
                                                <p className="text-address">Downcare street No. 21, East Purwokerto</p>
                                            </div>
                                            <hr />
                                            <div className="col-3">
                                                <p className="text-time">08:30am</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">10:30pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time sold">12:00pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">02:00pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time active">08:30am</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time sold">10:30pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">12:00pm</p>
                                            </div>
                                            <div className="col-6 py-3">
                                                <p className="text-price">Price</p>
                                            </div>
                                            <div className="col-6 py-3">
                                                <p className="text-price-item">$10.00/seat</p>
                                            </div>
                                            <div className="col-12 mb-2">
                                                <Link type="button" to={'/#'}
                                                    className="btn btn-primary w-100 shadow">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card shadow mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6 align-self-center">
                                                <img className="box-cinema" src="../../img/hiflix.svg" alt="cinema" />
                                            </div>
                                            <div className="col-6 mb-2">
                                                <h4 className="text-cinema">hiflix Cinema</h4>
                                                <p className="text-address">Colonel street No. 2, East Purwokerto</p>
                                            </div>
                                            <hr />
                                            <div className="col-3">
                                                <p className="text-time">08:30am</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">10:30pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time sold">12:00pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">02:00pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">08:30am</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time sold">10:30pm</p>
                                            </div>
                                            <div className="col-3">
                                                <p className="text-time">12:00pm</p>
                                            </div>
                                            <div className="col-6 py-3">
                                                <p className="text-price">Price</p>
                                            </div>
                                            <div className="col-6 py-3">
                                                <p className="text-price-item">$10.00/seat</p>
                                            </div>
                                            <div className="col-12 mb-2">
                                                <Link type="button" to={'/#'}
                                                    className="btn btn-primary w-100 shadow">Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="separator"><a href="#">view more</a></div> */}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}
