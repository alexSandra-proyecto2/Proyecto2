/*
Cuando pulse boton coger info 
convertir info
enviar info a back
*/



// function myFunction() {
//   let dir = document.getElementById('direccion').value
//   console.log(dir)


// }
document.getElementById('direccion').addEventListener("click", (event) => {
  event.preventDefault()
  let dir = document.getElementById('dirInput').value
  console.log(dir)
  getAddress(dir)
    .then(responseFromAPI => {
      let lat = responseFromAPI.results[0].geometry.location.lat
      let lng = responseFromAPI.results[0].geometry.location.lng
      console.log(lat, lng)
    })


});