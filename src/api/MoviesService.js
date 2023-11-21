import axios from "axios"

export class MoviesService {

    static BASE_URL = "https://api.themoviedb.org/3"
    static OPTIONS = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDE3MTA1ZTU5M2ZiMDI4NmI1OTg1OWRkZWRlOWNhMyIsInN1YiI6IjY1NWI0MjU3ZjY3ODdhMDBjNmNlZTEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8IgppWVE1ouikuk0fV5PZzs0a_uf8nC7c6XXjA5guU'
        }
    }

    static async getTrandingMovies() {
        const response = await axios
            .get(MoviesService.BASE_URL + '/trending/all/day?language=en-US', MoviesService.OPTIONS)
        return response.data;
    }

    static async getMoviesByQuery(searchText) {
        const response = await axios
            .get(MoviesService.BASE_URL + '/search/movie?query=' + searchText + '&include_adult=false&language=en-US&page=1', MoviesService.OPTIONS)
        return response.data;
    }

    static async getMovieDetailsById(id) {
        const response = await axios
            .get(MoviesService.BASE_URL + '/movie/' + id + '?language=en-US', MoviesService.OPTIONS)
        return response.data;
    }

    static async getMovieCastById(id) {
        const response = await axios
            .get(MoviesService.BASE_URL + '/movie/' + id + '/credits?language=en-US', MoviesService.OPTIONS)
        return response.data;
    }

    static async getMovieReviewsById(id) {
        const response = await axios
            .get(MoviesService.BASE_URL + '/movie/' + id + '/reviews?language=en-US&page=1', MoviesService.OPTIONS)
        return response.data;
    }
}