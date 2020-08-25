'use strict';
//Задача №1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return { 'D': D, 'roots': [] };
    } else if (D == 0) {
        let x1 = ((-b + Math.sqrt(D)) / (2 * a));
        return { 'D': D, roots: [x1] };
    } else if (D > 0) {
        let x1 = ((-b + Math.sqrt(D)) / (2 * a));
        let x2 = ((-b - Math.sqrt(D)) / (2 * a));
        return { 'D': D, roots: [x1, x2] };
    }
}

console.log(getSolutions(2, 4, -8));

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Зачение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(2, 4, -2);

// Задача №2

function getAverageScore(data) {
    let sum = 0;
    let iteration = 0;
    for (let key in data) {
        data[key] = getAverageMark(data[key]);
        iteration += 1;
        sum += data[key];
    }
    let average = sum / iteration;
    data.average = average;
    if (isNaN(data.average)) {
        data.average = 0;
        return data;
    }
    return data;
}


function getAverageMark(marks) {
    let sum = 0;
    if (marks.length == 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return parseFloat((sum / marks.length).toFixed(2));
}


console.log(getAverageScore({
    algebra: [3, 4, 5],
    geometry: [3, 5, 2],
    russian: [],
    physics: [5, 5]
}));





// Задача №3

function getPersonData(secretData) {
    let tmpObj = {};
    for (let key in secretData) {
        if (key == 'aaa') {
            tmpObj.firstName = getDecodedValue(secretData[key]);
        }
        if (key == 'bbb') {
            tmpObj.lastName = getDecodedValue(secretData[key]);
        }
    }
    return tmpObj;
}

function getDecodedValue(secret) {
    if (secret == 1) {
        return 'Эмильо';
    } else {
        return 'Родриго';
    }
}

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));