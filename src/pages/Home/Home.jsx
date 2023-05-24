import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchTrendMovies();
        if (!response.total_results) {
          throw new Error('No data! :-(');
        }
        setTrendMovies(response.results); // Записуємо в стейт results з API
      } catch (error) {
        setError(error);
        // console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <div>`Error: {error} There are not movies!`</div>}
      {/* {error && <Text>{error} There are not movies</Text>} */}
      <MoviesList movies={trendMovies} />
    </>
  );
};

export default Home;
