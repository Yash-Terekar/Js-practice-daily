// Day 12 - Project 5: Library Book Manager

class Book {
  constructor(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
  }
}
class Library {
  constructor() {
    this.book = [];
  }

  addBook(book) {
    this.book.push(book);
  }

  issueBook(title) {
    const book = this.book.find((book) => book.title === title);
    if (book) {
      if (book.status === "Available") {
        book.status = "Issued";
        console.log(`Book ${book.title} is Issued`);
      } else {
        console.log(`Book ${book.title} is already issued`);
      }
    } else {
      console.log(`${title} book not in library`);
    }
  }

  returnBook(title) {
    const book = this.book.find((book) => book.title === title);
    if (book) {
      if (book.status === "Issued") {
        book.status = "Available";
        console.log(`Book ${book.title} is now Available`);
      } else {
        console.log(`Book ${book.title} is Already Available`);
      }
    } else {
      console.log(`Book ${title} not in record`);
    }
  }
}
const lib = new Library();
const book1 = new Book("Panchatantra", "Vishnu Sharma", "Issued");
const book2 = new Book("The White Tiger", "Arvind Adiga", "Available");
const book3 = new Book("Paper Moon", "Rehana Munir", "Available");
const book4 = new Book("Rich Dad Poor Dad", "Robert & Sharon", "Issued");

lib.addBook(book1);
lib.addBook(book2);
lib.addBook(book3);
lib.addBook(book4);

lib.issueBook("Paper Moon");
// lib.returnBook("Panchatantr");
console.log(lib);
