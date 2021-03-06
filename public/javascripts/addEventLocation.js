document.getElementById('creaEvento').addEventListener("click", (event) => {
  event.preventDefault()
  let dir = document.getElementById('dirInput2').value
  let name = document.getElementById('name-input').value
  let date = document.getElementById('date-input').value
  let description = document.getElementById('description-input').value
  let type = document.getElementById('type-input').value
  console.log("las direccion", dir)
  getAddress(dir)
    .then(responseFromAPI => {
      let direc = responseFromAPI.results[0].formatted_address
      let lat = responseFromAPI.results[0].geometry.location.lat
      let lng = responseFromAPI.results[0].geometry.location.lng
      console.log(lat, lng)

      axios.post('/events/add', {
          name: name,
          date: date,
          description: description,
          type: type,
          address: direc,
          location: {
            type: "Point",
            coordinates: {
              lng,
              lat
            }

          }
        })
        .then(x => window.location.href = "https://alexsandra.herokuapp.com/events")
    })
});