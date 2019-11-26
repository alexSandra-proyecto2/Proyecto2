function getAllMoviesFromTheAPI(myMap) {
  axios.get("/api")
    .then(response => {
      console.log(response.data.movies)
      placeMovie(response.data.movies, myMap)
    })
    .catch(error => console.log(error))
}

function placeMovie(movies, myMap) {
  movies.forEach(elm => {


    for (let i = 0; i < elm.location.length; i++) {
      const center = {
        lat: elm.location[i].coordinates.lat,
        lng: elm.location[i].coordinates.lng
      }
      // const infoMovie = "This is movie xxxxxx"
      new google.maps.Marker({
        position: center,
        map: myMap
      })
      // new google.maps.InfoWindow({
      //   content: infoMovie
      // })

      // google.maps.event.addListener('click', () => {
      //   console.log("clicky")
      //   infowindow.open(myMap, marker)
      // })
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

  // const infoMovie = "This is movie xxxxxx"

  // const infowindow = new google.maps.InfoWindow({
  //   content: infoMovie
  // })
  // google.maps.event.addListener('click', function() {
  //   infowindow.open(myMap, marker)
  // })

  getAllMoviesFromTheAPI(myMap)
}