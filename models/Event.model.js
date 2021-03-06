const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  date: Date,
  description: String,
  creator: String,
  assistants: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  type: String,
  address: String,
  location: {
    type: {
      type: String
    },
    coordinates: {
      lng: Number,
      lat: Number
    }
  },
  picPath: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;