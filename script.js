const ADDBOOKBTN = document.getElementById("add-book");
const ADDBOOKFORM = document.getElementById("addBookForm");
const MODAL = document.querySelector(".modal");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

ADDBOOKBTN.addEventListener("click", () => {
  MODAL.style.display = "flex";
});

window.onclick = function (e) {
  if (e.target == MODAL) {
    MODAL.style.display = "none";
  }
};
