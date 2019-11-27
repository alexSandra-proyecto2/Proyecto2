function getAllMoviesFromTheAPI(myMap) {
  axios.get("/api")
    .then(response => {
      placeMovie(response.data.movies, myMap)

    })
    .catch(error => console.log(error))
}

function placeMovie(movies, myMap) {

  console.log(movies, "esto estoy pintando")
  movies.forEach(elm => {


    for (let i = 0; i < elm.location.length; i++) {
      const center = {
        lat: elm.location[i].coordinates.lat,
        lng: elm.location[i].coordinates.lng
      }
      const infoMovie = '<h4 style="text-align:center">' + elm.title + '</h4><br>' + '<div style="padding:12px"><img src="http://image.tmdb.org/t/p/w185/' + elm.poster_path + '" alt="imagen">'
      let marker = new google.maps.Marker({
        position: center,
        map: myMap
      })
      let infowindow = new google.maps.InfoWindow({
        content: infoMovie,
      })

      marker.addListener('click', () => {
        infowindow.open(myMap, marker)
      })
    }
  })
}


function initMap() {
  const myMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {
      lat: 41.3977381,
      lng: 2.190471916
    }
  })
  // let geocoder = new google.maps.Geocoder();

  // geocodeAddress(geocoder, "Calle Serrano 14, Madrid")
  getAllMoviesFromTheAPI(myMap)

}
