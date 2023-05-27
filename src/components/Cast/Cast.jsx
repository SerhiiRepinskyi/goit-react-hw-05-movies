import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import { MdOutlineScreenLockPortrait } from 'react-icons/md';
// import {} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Запит на акторський склад (Cast) фільму по Id
  useEffect(() => {
    const getMovieCast = async movieId => {
      setIsLoading(true);
      try {
        const { cast } = await fetchMovieCast(movieId);
        if (!cast.length) {
          throw new Error('No data! :-(');
        }
        setMovieCast(cast); // Записуємо в стейт масив обєктів
      } catch (errorCaught) {
        setError(errorCaught);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      getMovieCast(movieId);
    }
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p>
          Error: {error.message} Sorry, there is no information about the cast
          of the selected movie.
        </p>
      )}

      <ul>
        {movieCast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            {profile_path ? (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
              </div>
            ) : (
              <MdOutlineScreenLockPortrait
                style={{ display: 'block' }}
                // style={{ display: 'block', width: '100%' }}
                color="rgb(120, 115, 115 )"
                size={250}
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
