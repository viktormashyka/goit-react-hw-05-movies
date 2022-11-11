import axios from 'axios';
// import PropTypes from 'prop-types';

// const BASE_URL = 'https://pixabay.com/api/';
// example url = 'https://api.themoviedb.org/3/movie/550?api_key=857288c3c5f42347171bc7541b9a4b57'
// https://api.themoviedb.org/3/search/movie?api_key=857288c3c5f42347171bc7541b9a4b57&language=en-US&page=1&include_adult=false&query=
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '857288c3c5f42347171bc7541b9a4b57';

export const fetchMovies = async ({ query }) => {
  // const per_page = 12;

  const url = `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  //https://api.themoviedb.org/cat?api_key=857288c3c5f42347171bc7541b9a4b57
  try {
    const response = await axios.get(url);

    // const movies = getNormalizedMovies(response.data.hits);
    // const pages = Math.ceil(response.data.totalHits / per_page);

    // return { movies };
    return response;
  } catch (error) {
    throw new Error(error);
    console.error(error);
  }
};

// const getNormalizedMovies = movies => {
//   const normalizedData = movies.map(
//     ({ id, tags, webformatURL, largeImageURL }) => {
//       return { id, tags, webformatURL, largeImageURL };
//     }
//   );
//   return normalizedData;
// };

// fetchPhotos.propTypes = {
//   searchPhotos: PropTypes.array.isRequired,
//   page: PropTypes.number.isRequired,
// };

// import axios from 'axios';
// import PropTypes from 'prop-types';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '29782836-0cb6e5c5167e525a8102df66c';

// export const fetchPhotos = async ({ searchPhotos, page }) => {
//   const per_page = 12;

//   const url = `${BASE_URL}?key=${API_KEY}&q=${searchPhotos}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;

//   try {
//     const response = await axios.get(url);

//     const images = getNormalizedImages(response.data.hits);
//     const pages = Math.ceil(response.data.totalHits / per_page);

//     return { images, pages };
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const getNormalizedImages = images => {
//   const normalizedData = images.map(
//     ({ id, tags, webformatURL, largeImageURL }) => {
//       return { id, tags, webformatURL, largeImageURL };
//     }
//   );
//   return normalizedData;
// };

// fetchPhotos.propTypes = {
//   searchPhotos: PropTypes.array.isRequired,
//   page: PropTypes.number.isRequired,
// };
