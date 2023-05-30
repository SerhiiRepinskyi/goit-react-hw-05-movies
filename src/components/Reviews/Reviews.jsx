import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/themoviedbAPI';
import Loader from 'components/Loader';
import { ReviewsList, ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Запит на відгуки (Reviews) фільму по Id
  useEffect(() => {
    if (!movieId) return;

    const getMovieReviews = async movieId => {
      setIsLoading(true);
      try {
        const response = await fetchMovieReviews(movieId);
        const reviews = response.results;
        if (!reviews.length) {
          throw new Error('No data! :-(');
        }
        setMovieReviews(reviews); // Записуємо в стейт масив обєктів
      } catch (errorCaught) {
        setError(errorCaught);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>We don't have any reviews for this movie.</p>}

      <ReviewsList>
        {movieReviews.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <p>
              <b>
                Author: <em>{author}</em>
              </b>
            </p>
            <p>{content}</p>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </>
  );
};

export default Reviews;
