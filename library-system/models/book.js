const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  copies: [
    {
      copy_id: { type: String, required: true },
      status: { type: String, enum: ['available', 'checked_out'], default: 'available' }
    }
  ]
});

module.exports = mongoose.model('Book', bookSchema);
