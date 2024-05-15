// Function to fetch and display books
const fetchBooks = async () => {
    try {
        const response = await fetch('/books');
        const books = await response.json();
        bookList.innerHTML = ''; // Clear previous content
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h3>Title: <span class="book-title">${book.title}</span></h3>
                <p>Author: <span class="book-author">${book.author}</span></p>
                <p>ISBN: <span class="book-isbn">${book.isbn}</span></p>
            `;
            bookList.appendChild(bookItem);
        });
    } catch (error) {
        console.error('Error fetching books:', error.message);
    }
};

// Function to fetch and display users
const fetchUsers = async () => {
    try {
        const response = await fetch('/users');
        const users = await response.json();
        userList.innerHTML = ''; // Clear previous content
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.classList.add('user-item');
            userItem.innerHTML = `
                <h3>Username: <span class="user-username">${user.username}</span></h3>
                <p>Name: <span class="user-name">${user.name}</span></p>
                <p>Email: <span class="user-email">${user.email}</span></p>
            `;
            userList.appendChild(userItem);
        });
    } catch (error) {
        console.error('Error fetching users:', error.message);
    }
};

// Function to fetch and display librarians
const fetchLibrarians = async () => {
    try {
        const response = await fetch('/librarians');
        const librarians = await response.json();
        librarianList.innerHTML = ''; // Clear previous content
        librarians.forEach(librarian => {
            const librarianItem = document.createElement('div');
            librarianItem.classList.add('librarian-item');
            librarianItem.innerHTML = `
                <h3>Username: <span class="librarian-username">${librarian.username}</span></h3>
                <p>Name: <span class="librarian-name">${librarian.name}</span></p>
                <p>Email: <span class="librarian-email">${librarian.email}</span></p>
            `;
            librarianList.appendChild(librarianItem);
        });
    } catch (error) {
        console.error('Error fetching librarians:', error.message);
    }
};
// Function to handle adding a new book
addBookForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(addBookForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const isbn = formData.get('isbn');
    try {
        const response = await fetch('/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author, isbn })
        });
        const newBook = await response.json();
        console.log('New book added:', newBook);
        addBookForm.reset();
        fetchBooks(); // Refresh book list
    } catch (error) {
        console.error('Error adding book:', error.message);
    }
});

// Function to handle adding a new user
addUserForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(addUserForm);
    const username = formData.get('username');
    const name = formData.get('name');
    const email = formData.get('email');
    try {
        const response = await fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, name, email })
        });
        const newUser = await response.json();
        console.log('New user added:', newUser);
        addUserForm.reset();
        fetchUsers(); // Refresh user list
    } catch (error) {
        console.error('Error adding user:', error.message);
    }
});

// Function to handle adding a new librarian
addLibrarianForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(addLibrarianForm);
    const username = formData.get('librarian-username');
    const name = formData.get('librarian-name');
    const email = formData.get('librarian-email');
    try {
        const response = await fetch('/librarians', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, name, email })
        });
        const newLibrarian = await response.json();
        console.log('New librarian added:', newLibrarian);
        addLibrarianForm.reset();
        fetchLibrarians(); // Refresh librarian list
    } catch (error) {
        console.error('Error adding librarian:', error.message);
    }
});
