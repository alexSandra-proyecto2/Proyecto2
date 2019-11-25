const axios = require('axios')
class APIHandler {

  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }



  getFullList(page) {
    //console.log(`${this.BASE_URL}/movie/top_rated?api_key=5a5668367bc1d3e12a55e3df7da31e9d&language=es-ES&page=${page}`)
    return axios.get(`${this.BASE_URL}/movie/top_rated?api_key=5a5668367bc1d3e12a55e3df7da31e9d&language=es-ES&page=${page}`)
    .then(responseFromAPI => {

      console.log('Response from API is: ', responseFromAPI.data)

      return responseFromAPI.data
    })
  }
}

module.exports = APIHandler;