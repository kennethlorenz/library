const myLibrary = [];
function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; //add ternary? Boolean?
  this.id = id;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`;
};

Book.prototype.toggleRead = function () {};

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
var counter = 0;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const book = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked,
    counter
  );
  addBook(book, counter);
  closeModal();
  counter += 1;
});

function displayBooks() {
  myLibrary.map((book) => {
    addBook(book);
  });
}

function addBook(book, counter) {
  myLibrary.push(book);
  const card = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const page = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  card.dataset.id = counter;
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

  readBtn.addEventListener("click", () => {
    let text = readBtn.textContent;
    readBtn.textContent = text == "Not Read" ? "Read" : "Not Read";
    let read = readBtn.className;
    readBtn.className = read == "unread" ? "read" : "unread";
    book.read = readBtn.textContent == "Read" ? true : false;
    console.log(book);
    console.log(myLibrary);
  });

  removeBtn.addEventListener("click", (e) => {
    console.log(e.target.parentNode.dataset.id);
    books.removeChild(card);
    var index = myLibrary.findIndex(
      (item) => item.id == e.target.parentNode.dataset.id
    );
    myLibrary.splice(index, 1);
    console.log(myLibrary);
  });
  console.log(myLibrary);
}

var check = document.querySelector(".check");
check.addEventListener("click", () => {
  console.log(myLibrary.length);
});

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
  console.log(myLibrary);
  modal.style.display = "unset";
  modalContent.classList.add("modalZoom");
  modalContent.classList.remove("modalZoomOut");
});
modalCloseBtn.addEventListener("click", () => {
  closeModal();
});

displayBooks();
