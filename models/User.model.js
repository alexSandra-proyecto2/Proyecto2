const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  // imgName: String,
  // imgPath: String,
  pending: [{
    type: Schema.Types.ObjectId,
    ref: "Movie"
  }],
  shown: [{
    type: Schema.Types.ObjectId,
    ref: "Movie"
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;