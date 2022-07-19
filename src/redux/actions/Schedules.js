import axios from "axios";

const GetSchedulesRequest = () => {
    return {
        type: "GET_SCHEDULES_REQUEST",
    };
};

const GetSchedulesList = (data) => {
    return {
        type: "GET_SCHEDULES_LIST",
        payload: data
    };
}

const GetMovieById = (data) => {
    return {
        type: "GET_MOVIE_BY_ID",
        payload: data
    };
}

export const getSchedulesById = (id) => {
    return (dispatch) => {
        dispatch(GetSchedulesRequest())
        axios({
            method: "GET",
            url: `https://test.dhanz.me/api/v1/schedules/${id}`,
        }).then((res) => { //ketika sukses, dispatch sucess
            // console.log(res.data)
            dispatch(GetSchedulesList(res.data)) //trigger / dispatch
        }).catch((err) => {
            dispatch(GetSchedulesList(err))
        })
    }
}

export const getMovieById = (id) => {
    return (dispatch) => {
        dispatch(GetSchedulesRequest())
        axios({
            method: "GET",
            url: `https://test.dhanz.me/api/v1/movies/${id}`,
        }).then((res) => { //ketika sukses, dispatch sucess
            // console.log(res.data)
            dispatch(GetMovieById(res.data)) //trigger / dispatch
        }).catch((err) => {
            dispatch(GetMovieById(err))
        })
    }
}

