import { combineReducers } from 'redux'
import Movies from '../reducers/Movies'
import Auth from '../reducers/Auth'
import Schedule from '../reducers/Schedules'
const rootReducers = combineReducers({
    movies: Movies,
    auth: Auth,
    schedule: Schedule
})
export default rootReducers