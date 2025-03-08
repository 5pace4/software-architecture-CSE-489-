const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensures no duplicate student IDs
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Prevents duplicate emails
  },
  contact: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
