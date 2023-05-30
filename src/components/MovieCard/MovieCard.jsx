import PropTypes from 'prop-types';
import {
  MovieCardContainer,
  MovieImg,
  MovieInfo,
  GenresList,
  MovieMoreInform,
  MoreInformList,
  LinkStyled,
} from './MovieCard.styled';
import { FaRegFileImage } from 'react-icons/fa';

const MovieCard = ({ selectedMovieData }) => {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    selectedMovieData;

  // Перевірка валідності дати
  // Не число(isNaN): так - Unknown; ні (тобто число) - повертає рік
  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
  // Без перевірки валідності дати
  // const releaseYear = new Date(release_date).getFullYear();

  // Перевірка на наявність рейтингу, округлення до цілого
  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  return (
    <>
      <MovieCardContainer>
        {poster_path ? (
          <MovieImg
            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
            alt={title}
            width="300"
          />
        ) : (
          <FaRegFileImage
            style={{ display: 'block', width: '400px' }}
            color="rgb(60 80 60 )"
            size={400}
          />
        )}

        <MovieInfo>
          <h1>
            {title ?? 'Unknown'} ({releaseYear ?? releaseYear})
          </h1>
          <p>User score: {userScore}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </MovieInfo>
      </MovieCardContainer>

      <MovieMoreInform>
        <p>Additional information</p>

        <MoreInformList>
          <li>
            <LinkStyled to="cast">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </MoreInformList>
      </MovieMoreInform>
    </>
  );
};

MovieCard.propTypes = {
  selectedMovieData: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default MovieCard;
