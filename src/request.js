
const API_KEY = "bf55e927b5be977a0406702d91ce23d0";

const request = {
    fetchTrending:  '/trending/all/day?api_key=bf55e927b5be977a0406702d91ce23d0',
    fetchNetflixOriginals: `/discover/tv?api_key=bf55e927b5be977a0406702d91ce23d0&with_networks=213`,
    fetchPopularMovies: `/movie/popular?api_key=bf55e927b5be977a0406702d91ce23d0&language=en-US`,
    fetchDetailsMovies: `/movie/{movie_id}?api_key=bf55e927b5be977a0406702d91ce23d0&language=en-US`,
    fetchRateMovies: '/movie/{movie_id}/rating?api_key=bf55e927b5be977a0406702d91ce23d0',
};

export default request;
