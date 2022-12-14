import axios from 'axios';

export const getTrendings = () => {
  const response = axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=b4310814d45548a58ae7b609ad259609'
  );
  return response;
};

export const getMovieDetails = id => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b4310814d45548a58ae7b609ad259609&language=en-US`
  );
  return response;
};

export const findMovie = query => {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=b4310814d45548a58ae7b609ad259609&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response;
};

export const getMovieCredits = id => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b4310814d45548a58ae7b609ad259609&language=en-US`
  );
  return response;
};

export const getMovieReviews = id => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b4310814d45548a58ae7b609ad259609&language=en-US`
  );
  return response;
};
