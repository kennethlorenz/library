const ADDBOOKBTN = document.getElementById("add-book");
const ADDBOOKFORM = document.getElementById("addBookForm");
const MODAL = document.querySelector(".modal");
const SUBMITFORMBTN = document.querySelector(`button[type="submit"]`);
const BOOKSCONTAINER = document.querySelector(".books-container");

let myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

ADDBOOKBTN.addEventListener("click", () => {
  MODAL.style.display = "flex";
  document.body.style.overflow = "hidden";
});

window.onclick = function (e) {
  if (e.target == MODAL) {
    hideModal();
  }
};

function clearForm() {
  ADDBOOKFORM.reset();
}

function createBookObject() {
  const id = crypto.randomUUID();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBookObject = new Book(id, title, author, pages, read);
  return newBookObject;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function hideModal() {
  MODAL.style.display = "none";
  document.body.style.overflow = "unset";
  clearForm();
}

function removeBookFromLibrary(id) {
  const newArray = myLibrary.filter((book) => book.id !== id);
  myLibrary = newArray;
}

function updateReadByIdFromLibrary(id, readValue) {
  const indexOfBookToUpdate = myLibrary.findIndex((book) => book.id == id);
  myLibrary[indexOfBookToUpdate].read = readValue;
}

function createBookCard(book) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.id = book.id;

  const title = document.createElement("p");
  title.textContent = `"${book.title}"`;

  const author = document.createElement("p");
  author.textContent = book.author;

  const pages = document.createElement("p");
  pages.textContent = book.pages;

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);

  const readButton = document.createElement("button");

  readButton.classList.add("book-button");
  const isRead = book.read ? "read" : "not-read";
  const isReadTextContent = book.read ? "Read" : "Not Read";

  readButton.classList.add(isRead);
  readButton.textContent = isReadTextContent;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("book-button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";

  bookDiv.appendChild(readButton);
  bookDiv.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    bookDiv.remove();
    removeBookFromLibrary(bookDiv.id);
  });

  readButton.addEventListener("click", () => {
    let read = readButton.classList.toggle("read");
    readButton.classList.toggle("not-read", !read);

    let readValue = read ? "Read" : "Not Read";
    readButton.textContent = readValue;

    updateReadByIdFromLibrary(bookDiv.id, read);
  });

  return bookDiv;
}

function displayAllBooks() {
  myLibrary.map((book) => {
    const bookDiv = createBookCard(book);
    BOOKSCONTAINER.appendChild(bookDiv);
  });
}

function addBookToScreen(book) {
  const bookDiv = createBookCard(book);
  BOOKSCONTAINER.appendChild(bookDiv);
}

ADDBOOKFORM.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBook = createBookObject();
  addBookToLibrary(newBook);
  addBookToScreen(newBook);
  hideModal();
});
