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
    zoom: 3.5,
    center: {
      lat: 41.3977381,
      lng: 2.190471916
    },
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      // {
      //   featureType: 'poi.park',
      //   elementType: 'geometry',
      //   stylers: [{ color: '#263c3f' }]
      // },
      // // {
      // //   featureType: 'poi.park',
      // //   elementType: 'labels.text.fill',
      // //   stylers: [{ color: '#6b9a76' }]
      // // },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      // {
      //   featureType: 'transit',
      //   elementType: 'geometry',
      //   stylers: [{ color: '#2f3948' }]
      // },
      // {
      //   featureType: 'transit.station',
      //   elementType: 'labels.text.fill',
      //   stylers: [{ color: '#d59563' }]
      // },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#9FB4C7' }]
      },
      // {
      //   featureType: 'water',
      //   elementType: 'labels.text.fill',
      //   stylers: [{ color: '#515c6d' }]
      // },
      // {
      //   featureType: 'water',
      //   elementType: 'labels.text.stroke',
      //   stylers: [{ color: '#17263c' }]
      // }
    ]
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

    const center = {
      lat: elm.location.coordinates.lat,
      lng: elm.location.coordinates.lng
    }
    const infoEvent = '<h4 style="text-align:center">Título: ' + elm.name + '</h4>' + '<br> <p>Día del evento: ' + elm.date + '</p> <br> <p>Descripción: ' + elm.description + '</p>'
    

    let marker = new google.maps.Marker({
      position: center,
      map: myMap,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
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