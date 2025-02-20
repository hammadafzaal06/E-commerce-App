const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Additional fields like name, address, etc. can be added as needed
});

module.exports = mongoose.model('User', userSchema);