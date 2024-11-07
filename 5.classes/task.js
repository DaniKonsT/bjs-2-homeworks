class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(num) {
        if (num < 0) {
            this._state = 0;
        } if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);
        if (typeof findBook === 'object') {
            return findBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let giveBoook = this.books.find(book => book.name === bookName);
        if (typeof giveBoook === 'object') {
            let index = this.books.indexOf(giveBoook);
            this.books.splice(index, 1);
            return giveBoook;
        }
        else {
            return null;

        }
    }
}


class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subject) {
    if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject) === false) {
      return 0;
    }
    const gradePointAverage = this.marks[subject].reduce(
      (acc, mark, index, arr) => {
        acc += mark;
        if (index === arr.length - 1) {
          return acc / arr.length;
        }
        return acc;
      },
      0
    );
    return gradePointAverage;
  }
  getAverage() {
    if (Object.keys(this.marks).length === 0) {
      return 0;
    }
    let allSubject = Object.keys(this.marks);
    for (let subject of allSubject) {
      allSubject[allSubject.indexOf(subject)] =
        this.getAverageBySubject(subject);
    }
    const gradePointAverage = allSubject.reduce((acc, mark, index, arr) => {
      acc += mark;
      if (index === arr.length - 1) {
        return acc / arr.length;
      }
      return acc;
    }, 0);
    return gradePointAverage;
  }
}