/*
Cuando pulse boton coger info 
convertir info
enviar info a back
*/

document.getElementById('direccion').addEventListener("click", (event) => {
  event.preventDefault()
  let dir = document.getElementById('dirInput').value
  let movieId = document.getElementById('movieId').getAttribute('popino')
  console.log("el id", movieId)
  getAddress(dir)
    .then(responseFromAPI => {
      let lat = responseFromAPI.results[0].geometry.location.lat
      let lng = responseFromAPI.results[0].geometry.location.lng
      console.log(lat, lng)

      axios.post('/movies/add', {
        movieId: movieId,
        location: {
          type: "Point",
          coordinates: {
            lng,
            lat
          }
        }
      }).then(x => window.location.href = "http://localhost:3000/movies/1")


    })



});