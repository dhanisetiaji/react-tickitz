import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar'
import { Footer } from '../../Components/Footer'
import MetaTags from '../../Components/Metatags'
import { useDispatch, useSelector } from "react-redux";
import { GetMovies } from '../../redux/actions/Movies';
import LoaderMovie from '../../Components/LoaderMovie';
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom"
import './index.css'

const Movies = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams()

    const [params, setParams] = useState({
        orderBy: query.get('orderBy') ?? 'asc',
        q: query.get('search') ?? '',
        page: query.get('page') ?? 1,
        limit: 8,
    })

    const { getMovieList, loading } = useSelector((state) => state.movies);
    useEffect(() => {
        dispatch(GetMovies(params))
    }, [dispatch, params])
    let totalPage = Array(getMovieList.totalPage).fill() ?? []


    const handlePaginate = (page) => {
        setParams((prevState) => ({ ...prevState, page }))
        query.set('page', page)
        setQuery(query)
    }

    const searchHandler = async (e) => {
        e.preventDefault()
        const search = e.target.value
        setParams((prevState) => ({
            ...prevState,
            q: search,
        }))
        query.set('search', search)
        setQuery(query)
    }

    const orderByHandler = async (e) => {
        e.preventDefault()
        const order = e.target.value
        setParams((prevState) => ({
            ...prevState,
            orderBy: order,
        }))
        query.set('orderBy', order)
        setQuery(query)
    }

    return (<>
        <MetaTags title="Tickitz - List Movies" />
        <Navbar />
        <div className="viewall">
            <div className="container">
                <div className="row justify-content-between mb-3">
                    <div className="col-md-6">
                        <p className="text-upcoming">List Movie</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row ">
                            <div className="col-5 col-lg-5">
                                <select defaultValue={'default'} onChange={(e) => orderByHandler(e)} className="form-select">
                                    <option value={'default'} disabled>OrderBy</option>
                                    <option value={'asc'}>ASC</option>
                                    <option value={'desc'}>DESC</option>
                                </select>
                            </div>
                            <div className="col-7 col-lg-7">
                                <input className="form-control" onChange={(e) => searchHandler(e)} type="search" placeholder="Search Movie Name"
                                    aria-label="search" />
                            </div>
                        </div>
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
                <div className="row list-view">
                    {loading ? <LoaderMovie /> : getMovieList.results.map((movie, index) => {
                        return (
                            <div className="col-sm-3 list-view-card" key={index}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="card-movie-list card-movie-list-dekstop" src={`${process.env.REACT_APP_URL_IMG}/${movie.image}`}
                                            width="auto" height="auto" alt={movie.title} />
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
                                </div>
                            </div>
                        )
                    })}
                </div>
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
        <Footer />
    </>)
}

export default Movies