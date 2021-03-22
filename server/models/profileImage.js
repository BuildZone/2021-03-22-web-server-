const mongoose = require('mongoose');

const ProfileImageSchema = mongoose.Schema({
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('ProfileImage', ProfileImageSchema);
