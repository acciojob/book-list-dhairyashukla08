//your JS code here. If required.

const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    addBookToList(title, author, isbn);
    bookForm.reset();
});

function addBookToList(title, author, isbn) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;
    bookList.appendChild(row);
}
bookList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this book?')) {
            e.target.closest('tr').remove();
        }
    }
});