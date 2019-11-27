

function getAddress(address) {
  console.log(address)
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDG88rK2sVwRDbZIJautuIZpNt32kAQpSU`)
    .then(responseFromAPI => {

      console.log('Response from API is: ', responseFromAPI.data)

      return responseFromAPI.data
    })
}