import LoaderMovie from '../../../Components/LoaderMovie';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import moment from 'moment'
import { GetMoviesDate } from "../../../redux/actions/Movies"




export const NowShowing = () => {
    const dispatch = useDispatch();

    const { getMovieList, loading } = useSelector((state) => state.movies);

    useEffect(() => {
        const now = moment().format('MM-DD')
        dispatch(GetMoviesDate(now))
    }, [dispatch])

    const showContent = (id) => {
        document.getElementById(`show${id}`).style.display = 'block'
    }
    const hideContent = (id) => {
        document.getElementById(`show${id}`).style.display = 'none'
    }
    const showHide = (id) => {
        const show = document.getElementById(`show${id}`)
        if (show.style.display === 'block') {
            show.style.display = 'none'
        } else {
            show.style.display = 'block'
        }
    }

    return (
        <div className="now-showing">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <p className="text-nowshowing">Now Showing</p>
                    </div>
                    <div className="col-6 text-end">
                        <Link to={"/movies"} className="fw-bolder text-decoration-none">view all</Link>

                    </div>
                </div>
            </div>
            <div className="cards-movie">
                {loading ? <LoaderMovie /> : getMovieList.results.map((movie, index) => {
                    return (
                        <div className="card-movie" onMouseOver={() => showContent(movie.id)} onMouseLeave={() => hideContent(movie.id)} key={index}>
                            <img onClick={() => showHide(movie.id)} className="card-movie-list"
                                src={`${process.env.REACT_APP_URL_IMG}/${movie.image}`} alt={movie.title} title={movie.title} />
                            <div className={`description-upcoming text-center`} id={`show${movie.id}`} style={{ display: "none" }}>
                                <div className="row">
                                    <div className="col-12 description-padding">
                                        <h6>{movie.title}</h6>
                                        <p>{movie.genre}</p>
                                    </div>
                                    <div className="col-12 btn-nowshowing">
                                        <Link type="button" to={`/detail/${movie.id}`} className="btn btn-outline-secondary btn-full">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div >
    )
}

