import { Route, Routes } from 'react-router-dom';
import { Home, Movies } from './Pages';
import { DashboardAdmin, MoviesAdmin, CinemaAdmin } from './Pages/Admin';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/admin' element={<DashboardAdmin />} />
      <Route path='/admin/movie' element={<MoviesAdmin />} />
      <Route path='/admin/cinema' element={<CinemaAdmin />} />
    </Routes>
  )
}

export default App;
