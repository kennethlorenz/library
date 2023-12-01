const myLibrary = [];
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead; //add ternary? Boolean?
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`;
};

function addBookToLibrary() {}

const modalCloseBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add");

addBookBtn.addEventListener("click", () => {
  modal.style.display = "unset";
});
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
