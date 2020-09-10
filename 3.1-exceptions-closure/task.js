//Задача № 1
function parseCount(count) {
    count = Number.parseInt(count);
    if (isNaN(count)) {
        throw new Error('Невалидное значение');
    }
    return count;
}

function validateCount(count) {
    try {
        parseCount(count);
        return parseCount(count);
    } catch (e) {
        return e;
    }
}

// Задача №2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +S.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    let error = {
        getArea: () => 'Ошибка! Треугольник не существует',
        getPerimeter: () => 'Ошибка! Треугольник не существует'
    };
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (e) {
        return error;
    }
}