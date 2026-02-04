const ADDBOOKBTN = document.getElementById("add-book");
const ADDBOOKFORM = document.getElementById("addBookForm");
const MODAL = document.querySelector(".modal");
const SUBMITFORMBTN = document.querySelector(`button[type="submit"]`);

const myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = id;
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
  console.log(newBookObject);
}

function addBookToLibrary() {
  const newBook = createBookObject();
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function hideModal() {
  MODAL.style.display = "none";
}

ADDBOOKFORM.addEventListener("submit", (e) => {
  e.preventDefault();

  createBookObject();
  clearForm();
  hideModal();
});
