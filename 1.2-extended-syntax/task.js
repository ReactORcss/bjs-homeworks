'use strict';

function getResult(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1 = ((-b + Math.sqrt(D)) / (2 * a));
    let x2 = ((-b - Math.sqrt(D)) / (2 * a));
    let x = [];
    if (D == 0) {
        x.push(x1);
        return x;
    } else if (D > 0) {
        x.push(x1, x2);
        return x;
    }
    return x;
}

function getAverageMark(marks) {
    let sum = 0;
    if (marks.length == 0) {
        return 0;
    }
    if (marks.length > 5) {
        console.log('Количество оценок превышает допустимый предел');
        marks.splice(5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function askDrink(name, dateOfBirthday) {
    let result = `Не желаете ли олд-фэшн, ${name}?`;
    let date = Date.now(); // дата в мс
    let currentAgeInMs = date - dateOfBirthday; //возраст в мс
    let currentAge = currentAgeInMs / 31557600000; //делим на кол-во мс в году, получаем возраст в годах
    if (currentAge < 18) {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}