const mongoose = require('mongoose');

const librarianSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('Librarian', librarianSchema);
