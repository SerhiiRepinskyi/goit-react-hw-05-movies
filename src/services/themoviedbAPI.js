import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '4bf150e89573609a4e50188ee97df75b';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day'; // week
const LANGUAGE = 'en-US';

// Запит на трендові фільми
export async function fetchTrendMovies() {
  const response = await axios.get(
    `${BASE_URL}/3/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  if (!response.status) {
    throw new Error(response.status);
  }
  return response.data;
}

// Запит на пошук фільму за ключовим словом
export async function fetchMovieByName(searchQuery) {
  const response = await axios.get(
    `${BASE_URL}/3/search/${MEDIA_TYPE}?api_key=${API_KEY}&language=${LANGUAGE}&query=${searchQuery}&page=1&include_adult=false`
  );
  if (!response.status) {
    throw new Error(response.status);
  }
  return response.data;
}

// Запит повної інформації про фільм за Id
export async function fetchMovieById(id) {
  const response = await axios.get(
    `${BASE_URL}/3/${MEDIA_TYPE}/${id}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (!response.status) {
    throw new Error(response.status);
  }
  return response.data;
}

// Запит на акторський склад (Cast) фільму за Id
export async function fetchMovieCast(id) {
  const response = await axios.get(
    `${BASE_URL}/3/${MEDIA_TYPE}/${id}/credits?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (!response.status) {
    throw new Error(response.status);
  }
  return response.data;
}

// Запит відгуків (Reviews) про фільм за Id
export async function fetchMovieReviews(id) {
  const response = await axios.get(
    `${BASE_URL}/3/${MEDIA_TYPE}/${id}/reviews?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  if (!response.status) {
    throw new Error(response.status);
  }
  return response.data;
}
