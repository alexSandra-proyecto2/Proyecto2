const axios = require('axios')
class GoogleAPIHandler {

  getAddress(address) {
    //https://api.themoviedb.org/3/movie/429?api_key=5a5668367bc1d3e12a55e3df7da31e9d
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}=AIzaSyDG88rK2sVwRDbZIJautuIZpNt32kAQpSU`)
      .then(responseFromAPI => {

        //console.log('Response from API is: ', responseFromAPI.data)

        return responseFromAPI.data
      })
  }
}

module.exports = GoogleAPIHandler