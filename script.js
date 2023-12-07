const myLibrary = [{ title: "test", author: "test", pages: 25, read: true }];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; //add ternary? Boolean?
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`;
};

function addBookToLibrary() {}

const modalCloseBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add");
const modalContent = document.querySelector(".modal-content");
const submitBtn = document.querySelector(".submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const form = document.querySelector("form");
const read = document.querySelector("#read");
const books = document.querySelector(".books");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const book = new Book(title.value, author.value, pages.value, read.checked);
  addBook(book);
  closeModal();
});

function displayBooks() {
  myLibrary.map((book) => {
    addBook(book);
  });
}

function addBook(book) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const page = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  card.classList.add("book");
  title.classList.add("title");
  author.classList.add("author");
  page.classList.add("page");
  readBtn.classList.add(book.read ? "read" : "unread");
  removeBtn.classList.add("remove");

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(page);
  card.appendChild(readBtn);
  card.appendChild(removeBtn);
  title.textContent = book.title;
  author.textContent = book.author;
  page.textContent = book.pages;
  readBtn.textContent = book.read ? "Read" : "Not Read";
  removeBtn.textContent = "Remove";
  books.appendChild(card);
}

function resetForm() {
  form.reset();
}

function closeModal() {
  modalContent.classList.remove("modalZoom");
  modalContent.classList.add("modalZoomOut");
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);
  resetForm();
}

addBookBtn.addEventListener("click", () => {
  modal.style.display = "unset";
  modalContent.classList.add("modalZoom");
  modalContent.classList.remove("modalZoomOut");
});
modalCloseBtn.addEventListener("click", () => {
  closeModal();
});

window.onload(displayBooks());
