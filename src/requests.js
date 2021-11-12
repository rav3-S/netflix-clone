const APIKEY = "bbadc446f13882545def373b26e04801";

const requests = {
    fetchTrending: `trending/all/week?api_key=bbadc446f13882545def373b26e04801&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=bbadc446f13882545def373b26e04801&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=bbadc446f13882545def373b26e04801&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=bbadc446f13882545def373b26e04801&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=bbadc446f13882545def373b26e04801&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=bbadc446f13882545def373b26e04801&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=bbadc446f13882545def373b26e04801&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=bbadc446f13882545def373b26e04801&with_genres=99`,
}

export default requests;