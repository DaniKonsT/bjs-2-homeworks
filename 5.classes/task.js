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
    constructor(type, name, releaseDate, pagesCount) {
        super(type, name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, type, releaseDate, pagesCount) {
        super(type, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
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
        this.journal = {};
    }

    setSubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            return console.log('Предмет уже существует.');
        }
        else {
            this.journal[subjectName] = [];
        }
    }
    
    addMark(mark, subjectName) {
        if (this.journal.hasOwnProperty(subjectName) !== true) {
            this.journal[subjectName] = [];
            console.log('Несуществующий предмет. Предмет создан.');
        }
        if ((typeof mark === 'number') && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark);
        }
        else {
            return console.log('Ошибка, оценка должна быть числом от 1 до 5');
        }
    }

    getAverageBySubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            let sum = 0;
            let marks = this.journal[subjectName];
            marks.forEach((item) => sum += item);
            let averageBySubject = sum / marks.length;
            return averageBySubject;
        } else {
            return console.log('Несуществующий предмет.');
        }
    }

    getAverage() {
        let sum = 0;
        let marks = Object.values(this.journal);
        let resultMarks = [];
        marks.forEach((item) => resultMarks = [].concat(resultMarks, item));
        resultMarks.forEach((item) => sum += item);
        let average = sum / resultMarks.length;
        return average;
    }

    exclude(reason) {
        delete this.journal;
        this.excluded = reason;
    }
}