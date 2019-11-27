const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  //TIENE QUE SER COMO ESTA EN LA API
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: String,
  overview: String,
  vote_average: Number,
  genre_ids: [Number],
  poster_path: String,
  release_date: Date,
  location: [{
    type: {
      type: String,
    },
    coordinates: {
      lng: Number,
      lat: Number
    }
  }]

  //meter los actores (movies/getCredits)
  //meter director (movies/getCredits)

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;