const initialState = {
    loading: false,
    data: {
        results: [],
    },
    movies: {
        results: [],
    }
}

const Fetch = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {
        case "GET_SCHEDULES_REQUEST":
            return { ...state, loading: true }
        case "GET_SCHEDULES_LIST":
            return { ...state, loading: false, data: { results: action.payload } }
        case "GET_MOVIE_BY_ID":
            return { ...state, loading: false, movies: action.payload }
        default:
            return state
    }
}

export default Fetch