import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import MovieCard from 'components/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? `/`);

  // Запит фільму по Id
  useEffect(() => {
    const getMovieById = async movieId => {
      setIsLoading(true);
      try {
        const movieData = await fetchMovieById(movieId);
        if (!movieData) {
          throw new Error('No data! :-(');
        }
        setMovieData(movieData); // Записуємо в стейт обєкт з даними
      } catch (errorCaught) {
        setError(errorCaught);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      getMovieById(movieId);
    }
  }, [movieId]);

  return (
    <>
      {/* Link для повернення на попередню сторінку */}
      {/* Без використання useRef: to={location?.state?.from ?? '/'} */}
      <Link to={backLinkHref.current}>
        <button type="button">Go back</button>
      </Link>

      {isLoading && <Loader />}
      {error && (
        <div>
          Error: {error.message}. Sorry, there are not movie data. Please try
          again later!
        </div>
      )}
      {/* Картка для відображення вибраного фільму */}
      <MovieCard selectedMovieData={movieData} />

      {/* Відкладений рендеринг дочірніх компонентів */}
      {/* <Suspense fallback={<LoadingIndicator />}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default MovieDetails;
