const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  //TIENE QUE SER COMO ESTA EN LA API
  title: String,
  overview: String,
  vote_average: Number,
  genres: [String],
  poster_path: String,
  release_date: Date,
  status: String
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