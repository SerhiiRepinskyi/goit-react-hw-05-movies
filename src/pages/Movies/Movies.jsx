import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByName } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
// import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
// import {} from './Movies.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  // Читаємо назву фільму з URL
  const movieName = searchParams.get('name') ?? '';

  // Запит на пошук фільму за ключовим словом
  useEffect(() => {
    if (!movieName) return;

    const gethMovieByName = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieByName(movieName);
        if (!response.total_results) {
          setSearchMovies([]); // Очистка масиву фільмів
          throw new Error('No data! :-(');
        }
        setSearchMovies(response.results); // Записуємо в стейт results
      } catch (errorCaught) {
        setError(errorCaught);
      } finally {
        setIsLoading(false);
      }
    };

    gethMovieByName();
  }, [movieName]);

  // Функція для обробки пошукового запиту форми, передана пропсом в Searchbar
  const handleFormSubmit = searchQuery => {
    if (!searchQuery) {
      setSearchParams({});
      setSearchMovies([]);
      return;
    }
    // Записуємо назву фільму (searchQuery) з Searchbar в URL
    setSearchParams({ name: searchQuery });
    setError('');
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} movieName={movieName} />

      {isLoading && <Loader />}

      {error && <p>Ooops... Sorry!!! Nothing was found for your query!</p>}

      <MoviesList movies={searchMovies} />

      {/* <ToastContainer autoClose={2000} position="top-center" theme="colored" /> */}
    </>
  );
};

export default Movies;
