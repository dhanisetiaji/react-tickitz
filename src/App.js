// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Home, Movies, DetailMovie } from './Pages';
import { DashboardAdmin, MoviesAdmin, CinemaAdmin } from './Pages/Admin';
import { Signin, Signup } from './Pages/Auth';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/detail/' element={<DetailMovie />} />
      <Route path='/detail/:id' element={<DetailMovie />} />
      <Route path='/auth' element={<PublicRoute isRestricted={true}><Signin /></PublicRoute>}></Route>
      <Route path='/auth/signin' element={<PublicRoute isRestricted={true}><Signin /></PublicRoute>}></Route>
      <Route path='/auth/signup' element={<PublicRoute isRestricted={true}><Signup /></PublicRoute>}></Route>
      <Route path='/admin' element={<PrivateRoute><DashboardAdmin /></PrivateRoute>} />
      <Route path='/admin/movie' element={<PrivateRoute><MoviesAdmin /></PrivateRoute>} />
      <Route path='/admin/cinema' element={<PrivateRoute><CinemaAdmin /></PrivateRoute>} />
    </Routes>
  )
}

export default App;
