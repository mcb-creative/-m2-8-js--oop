// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class. Also, if no Book is being currently read
// we should set currentlyReading to point to this newly added Book.
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

class Book {
  constructor(title, genre, author, isRead) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.isRead = isRead || false;
  }
}

class BookList extends Book {
  // Code here
  constructor() {
    super();
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }
  add = (book) => {
    this.books.push(book);
    return book;
}
  getNumRead = (book) => {
  let totalRead = 0;
  this.books.map((book) => {
    if (book.isRead === true) {
      totalRead += 1;
    }
  })
  return totalRead;
}
getNumUnread = (book) => {
  let totalUnread = 0;
  this.books.map((book) => {
    if (book.isRead === false) {
      totalUnread += 1;
    }
  })
  return totalUnread;
}
}

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);

console.log(homeLibrary.books)

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1