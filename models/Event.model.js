const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  date: Date,
  description: String,
  creator: String, //de modelo CAMBIAR
  assistants: String, //de modelo CAMBIAR
  type: String,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;