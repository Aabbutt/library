const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); // Require path module for file paths

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Link routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const librarianRoutes = require('./routes/librarianRoutes');

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/librarians', librarianRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
