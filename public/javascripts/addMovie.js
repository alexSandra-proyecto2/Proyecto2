function geocodeAddress(geocoder, address) {

  geocoder.geocode({
    address
  }, function (results, status) {
    if (status === 'OK') {
      //myMap.setCenter(results[0].geometry.location);
      latitud = results[0].geometry.location.lat()
      longitud = results[0].geometry.location.lng();
      console.log(latitud, longitud, "socorro")
      // var marker = new google.maps.Marker({
      //   map: myMap,
      //   position: results[0].geometry.location
      // });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
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
  let geocoder = new google.maps.Geocoder();

  geocodeAddress(geocoder, "Calle Serrano 14, Madrid")
}