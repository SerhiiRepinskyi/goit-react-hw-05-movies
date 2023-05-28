import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import SharedLayout from 'components/SharedLayout';

// Поділ коду - маршрут/компонент завантажиться лише за потреби
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* <ToastContainer autoClose={2000} position="top-center" theme="colored" /> */}
    </div>
  );
};
