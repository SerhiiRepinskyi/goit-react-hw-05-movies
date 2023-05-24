import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation(); // ??????????

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </Link>
        </MovieItem>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
