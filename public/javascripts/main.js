function getAllMoviesFromTheAPI(myMap) {
  axios.get("/api")
    .then(response => {
      console.log(response.data, response.data.movies, response.data.event)
      placeMovie(response.data.movies, myMap)

    })
    .catch(error => console.log(error))
}

function placeMovie(movies, myMap) {

  //console.log(movies, "esto estoy pintando")
  movies.forEach(elm => {


    for (let i = 0; i < elm.location.length; i++) {
      const center = {
        lat: elm.location[i].coordinates.lat,
        lng: elm.location[i].coordinates.lng
      }
      const infoMovie = '<h4 style="text-align:center">' + elm.title + '</h4><br>' + '<div style="padding:0 12px"><img src="http://image.tmdb.org/t/p/w185/' + elm.poster_path + '" alt="imagen"><br><a href="#" style="margin-top:10px" class="btn btn-dark"> Añadir a pendientes</a><br><a href="#" style="margin-top:10px" class="btn btn-dark"> Añadir a vistas</a>'
      let marker = new google.maps.Marker({
        position: center,
        map: myMap
      })
      let infowindow = new google.maps.InfoWindow({
        content: infoMovie,
        closeOnMapClick: true,
        shadow: true,
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
    },
  })
  // let geocoder = new google.maps.Geocoder();

  // geocodeAddress(geocoder, "Calle Serrano 14, Madrid")
  getAllMoviesFromTheAPI(myMap)
  getAllEventFromTheAPI(myMap)

}

function getAllEventFromTheAPI(myMap) {
  axios.get("/api/events")
    .then(response => {
      console.log(response.data.event)
      placeEvent(response.data.event, myMap)

    })
    .catch(error => console.log(error))
}

function placeEvent(event, myMap) {

  console.log(event, "esto estoy pintando de events")
  event.forEach(elm => {
    console.log("la lat", elm.location.coordinates.lat)

    //for (let i = 0; i < elm.location.length; i++) {

    const center = {
      lat: elm.location.coordinates.lat,
      lng: elm.location.coordinates.lng
    }
    const infoEvent = '<h4 style="text-align:center">' + elm.name + '</h4>'
    let marker = new google.maps.Marker({
      position: center,
      map: myMap,
    })
    let infowindow = new google.maps.InfoWindow({
      content: infoEvent,
    })

    marker.addListener('mouseover', () => {
      infowindow.open(myMap, marker)
    })
    //}
  })
}