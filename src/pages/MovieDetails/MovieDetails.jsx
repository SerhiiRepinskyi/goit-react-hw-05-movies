import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import MovieCard from 'components/MovieCard';
import { Section, LinkStyled } from './MovieDetails.styled';

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
    <Section>
      {/* Link для повернення на попередню сторінку */}
      {/* Без використання useRef: to={location?.state?.from ?? '/'} */}
      <LinkStyled to={backLinkHref.current}>Go back</LinkStyled>

      {isLoading && <Loader />}
      {error && (
        <div>
          Error: {error.message}. Sorry, there is no data for the selected
          movie.
        </div>
      )}

      {/* Картка для відображення вибраного фільму */}
      <MovieCard selectedMovieData={movieData} />

      {/* Рендеринг дочірніх компонентів лише за потреби*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default MovieDetails;
