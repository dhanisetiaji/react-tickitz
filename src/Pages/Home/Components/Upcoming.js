// import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { GetMovies } from '../../../redux/actions/Movies';
import LoaderMovie from '../../../Components/LoaderMovie';

// import moment from 'moment'

export const Upcoming = () => {
    const dispatch = useDispatch();

    // const { MovieCUD } = useSelector((state) => state.movie)

    useEffect(() => {
        dispatch(GetMovies({ orderBy: 'asc', limit: 10 }))
    }, [dispatch])
    const { getMovieList, loading } = useSelector((state) => state.movies);

    console.log(getMovieList)
    return (<>
        <div className="upcoming">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <p className="text-upcoming">Upcoming Movies</p>
                    </div>
                    <div className="col-6 text-end">
                        <Link to={"/movies"} className="fw-bolder text-decoration-none">view all</Link>
                    </div>
                </div>
                <div className="row scrollmonth py-3">
                    <div className="col monthscr">
                        <button className="btn btn-primary shadow">September</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">October</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">November</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">December</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">January</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">February</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">March</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">April</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">Mei</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">June</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">July</button>
                    </div>
                    <div className="col monthscr">
                        <button className="btn btn-outline-secondary">Agustus</button>
                    </div>
                </div>
            </div>
            <div className="cards-movie">
                {/* <LoaderMovie /> */}
                {loading ? <LoaderMovie /> : getMovieList.results.map((movie, index) => {
                    return (
                        <div className="card-upcoming" key={index}>
                            <img className="card-movie-list" src={`${process.env.REACT_APP_URL_IMG}/${movie.image}`} width="auto" height="auto"
                                alt={movie.title} />
                            <div className="description-upcoming text-center">
                                <div className="row">
                                    <div className="col-12 description-padding">
                                        <h6>{movie.title}</h6>
                                        <p>{movie.genre}</p>
                                    </div>
                                    <div className="col-12">
                                        <Link type="button" to={`/detail/${movie.id}`}
                                            className="btn btn-outline-secondary btn-full">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </>
    )
}
