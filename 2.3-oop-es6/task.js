// Задача № 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
        if (this.state < 0) {
            this.state = 0;
        }
    }
    set state(state) {
        this._state = state;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author);
console.log(picknick.name);
console.log(picknick.type);
console.log(picknick.releaseDate);
console.log(picknick.pagesCount);
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

// Задача № 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let book in this.books) {
            if (this.books[book][type] == value) {
                return this.books[book];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let book of this.books) {
            if (book.name == bookName) {
                // let a = this.books.indexOf(book);
                return this.books.splice(this.books.indexOf(book), 1)[0];
            }
        }
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Мурзилка");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

console.log(library.books);

// Задача № 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this._grade = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade > 5 || grade < 1 || isNaN(grade)) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются числа от 1 до 5`);
            return 0;
        }
        if (this._grade[subject]) {
            this._grade[subject].push(grade);
            return this._grade[subject].length;
        }
        this._grade[subject] = [grade];
        return this._grade[subject].length;
    }
    getAverageBySubject(subject) {
        if (!this._grade[subject]) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < this._grade[subject].length; i++) {
            sum += this._grade[subject][i];
        }
        return sum / this._grade[subject].length;
    }
    getTotalAverage() {
        let count = 0;
        let sum = 0;
        for (let key in this._grade) {
            for (let i = 0; i < this._grade[key].length; i++) {
                count += 1;
                sum += this._grade[key][i];
            }
        }
        return sum / count;
    }
}

const student = new StudentLog('Олег Никифоров');
console.log(student.addGrade('отлично', 'algebra'));
console.log(student.addGrade(5, 'algebra'));
console.log(student.addGrade(4, 'algebra'));
console.log(student.addGrade(5, 'geometry'));
console.log(student.addGrade(2, 'geometry'));
console.log(student.getAverageBySubject('algebra'));
console.log(student.getTotalAverage());
console.log(student);