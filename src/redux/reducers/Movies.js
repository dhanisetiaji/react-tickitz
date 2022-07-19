const initialState = {
    loading: false,
    getMovieList: {
        results: [],
        totalAllData: 0,
        totalPage: 0,
        totalRows: 0,
    },
    getMovieNowShowing: {
        results: [],
    },
    MovieCUD: [],
}


const Fetch = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {
        case "GET_MOVIES_REQUEST":
            return { ...state, loading: true }
        case "GET_MOVIES_LIST":
            return { ...state, loading: false, getMovieList: action.payload }
        case "GET_MOVIES_BY_DATE":
            return { ...state, loading: false, getMovieNowShowing: action.payload }
        case "POST_MOVIE_CUD":
            return { ...state, loading: false, MovieCUD: action.payload }
        default:
            return state
    }
}

export default Fetch
