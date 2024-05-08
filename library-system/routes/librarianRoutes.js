const express = require('express');
const router = express.Router();
const librarianController = require('../controllers/librarianController');

// Route to get all librarians
router.get('/', librarianController.getAllLibrarians);

// Route to get a specific librarian by ID
router.get('/:id', librarianController.getLibrarianById);

// Route to create a new librarian
router.post('/', librarianController.createLibrarian);

// Route to update a librarian by ID
router.put('/:id', librarianController.updateLibrarianById);

// Route to delete a librarian by ID
router.delete('/:id', librarianController.deleteLibrarianById);

module.exports = router;
