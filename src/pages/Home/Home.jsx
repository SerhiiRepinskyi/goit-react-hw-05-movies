import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
// import { Message } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Запит на трендові фільми
  useEffect(() => {
    const getTrendMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchTrendMovies();
        if (!response.total_results) {
          throw new Error('No data! :-(');
        }
        setTrendMovies(response.results); // Записуємо в стейт results з API
      } catch (errorCaught) {
        setError(errorCaught);
        // console.error('Error:', errorCaught);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}

      {error && (
        <p>
          Error: {error.message} Sorry, there are not trending movies. Please
          try again later!
        </p>
      )}

      <MoviesList movies={trendMovies} />
    </>
  );
};

export default Home;
