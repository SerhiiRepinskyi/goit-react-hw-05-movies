import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '4bf150e89573609a4e50188ee97df75b';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day'; // week
// const LANGUAGE = 'en-US';

export async function fetchTrendMovies() {
  const response = await axios.get(
    `${BASE_URL}/3/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  if (!response.status) {
    throw new Error(response.status);
  }
  return response.data;
}

// export default async function fetchFilms(searchQuery, page) {
//   if (searchQuery) {
//     const response = await axios.get(
//       `${API_PATH}/movie/550?api_key=${API_KEY}`
//     );
//     if (!response.status) {
//       throw new Error(response.status);
//     }
//     return response.data;
//   }
// }

// export default fetchImagesOnQuery;
