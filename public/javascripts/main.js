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

    const center = {
      lat: elm.location[0].coordinates.lat,
      lng: elm.location[0].coordinates.lng
    }
    new google.maps.Marker({
      position: center,
      map: myMap
    });

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

  getAllMoviesFromTheAPI(myMap)
}