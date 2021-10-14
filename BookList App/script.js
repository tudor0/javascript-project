// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Ui Class: Handles UI
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
  static deleteBook(target) {
    if (target.classList.contains("delete"))
      target.parentElement.parentElement.remove();
  }
  static showAlert(message, className) {
    const Maindiv = document.createElement("div");
    Maindiv.className = `alert alert-${className}`;
    Maindiv.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(Maindiv, form);
    // DISSAPEAR IN 3 SEC
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}
// Store Class: Handles Local Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) books.splice(index, 1);
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  // Checking for empty values
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Input areas cannot be empty", "danger");
    return;
  }
  // Intantiate book
  const book = new Book(title, author, isbn);

  // Add book to UI
  UI.addBookToList(book);

  // Add book to local storage
  Store.addBook(book);

  // Show success message
  UI.showAlert("Book added", "success");

  // Clear Fields
  UI.clearFields();
});
// Event: Remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);

  // Remove book
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert("Book removed", "primary");
});
