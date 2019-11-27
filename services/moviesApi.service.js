const axios = require('axios')
class APIHandler {

  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }



  getFullList(page) {
    //console.log(`${this.BASE_URL}/movie/top_rated?api_key=5a5668367bc1d3e12a55e3df7da31e9d&language=es-ES&page=${page}`)
    return axios.get(`${this.BASE_URL}/movie/popular?api_key=5a5668367bc1d3e12a55e3df7da31e9d&language=es-ES&page=${page}`)
      .then(responseFromAPI => {

        //console.log('Response from API is: ', responseFromAPI.data)

        return responseFromAPI.data
      })
  }
  getMovieByID(movieId) {
    //https://api.themoviedb.org/3/movie/429?api_key=5a5668367bc1d3e12a55e3df7da31e9d
    return axios.get(`${this.BASE_URL}/movie/${movieId}?api_key=5a5668367bc1d3e12a55e3df7da31e9d&language=es-ES`)
      .then(responseFromAPI => {

        //console.log('Response from API is: ', responseFromAPI.data)

        return responseFromAPI.data
      })
  }
}


module.exports = APIHandler;