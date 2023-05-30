import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import { FaPortrait } from 'react-icons/fa';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Запит на акторський склад (Cast) фільму по Id
  useEffect(() => {
    if (!movieId) return;

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

    getMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>We don't have information about the cast of this movie.</p>}

      <CastList>
        {movieCast.map(({ id, profile_path, name, character }) => (
          <CastItem key={id}>
            {profile_path ? (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
              </div>
            ) : (
              <FaPortrait
                // style={{ display: 'block', width: '100%' }}
                style={{ display: 'block', width: '160px', height: '240px' }}
                color="rgb(120, 115, 115)"
                // size={250}
              />
            )}
            <p>
              <b>{name}</b>
            </p>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </CastList>
    </>
  );
};

export default Cast;
