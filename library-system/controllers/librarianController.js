const Librarian = require('../models/librarian');

// Controller method to get all librarians
exports.getAllLibrarians = async (req, res) => {
  try {
    const librarians = await Librarian.find();
    res.json(librarians);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller method to get a specific librarian by ID
exports.getLibrarianById = async (req, res) => {
  const { id } = req.params;
  try {
    const librarian = await Librarian.findById(id);
    if (!librarian) {
      return res.status(404).json({ message: 'Librarian not found' });
    }
    res.json(librarian);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller method to create a new librarian
exports.createLibrarian = async (req, res) => {
  const { username, name, email } = req.body;
  try {
    const newLibrarian = new Librarian({ username, name, email });
    await newLibrarian.save();
    res.status(201).json(newLibrarian);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller method to update a librarian by ID
exports.updateLibrarianById = async (req, res) => {
  const { id } = req.params;
  const { username, name, email } = req.body;
  try {
    const librarian = await Librarian.findByIdAndUpdate(id, { username, name, email }, { new: true });
    if (!librarian) {
      return res.status(404).json({ message: 'Librarian not found' });
    }
    res.json(librarian);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller method to delete a librarian by ID
exports.deleteLibrarianById = async (req, res) => {
  const { id } = req.params;
  try {
    const librarian = await Librarian.findByIdAndDelete(id);
    if (!librarian) {
      return res.status(404).json({ message: 'Librarian not found' });
    }
    res.json({ message: 'Librarian deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
