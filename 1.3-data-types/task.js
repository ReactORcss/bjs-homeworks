'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = parseInt(percent);
    contribution = parseInt(contribution);
    amount = parseInt(amount);
    if (isNaN(percent)) {
        return `Параметр percent содержит неправильное значение ${percent}`;
    }
    if (isNaN(contribution)) {
        return `Параметр contribution содержит неправильное значение ${contribution}`;
    }
    if (isNaN(amount)) {
        return `Параметр amount содержит неправильное значение ${amount}`;
    }
    if (isNaN(date)) {
        return `Параметр date содержит неправильное значение ${date}`;
    }
    let P = (percent / 100) / 12;
    let currentAgeInMs = Date.now(); // текущая дата в мс
    date = Math.floor((date - currentAgeInMs) / 2592000000); // делим на кол-во мс в месяце и округляем до целого
    // let today = new Date();
    // let n = (date.getFullYear() - today.getFullYear()) * 12 + date.getMonth() - today.getMonth();
    let monthAmount = (amount - contribution) * (P + P / ((Math.pow(1 + P, date)) - 1));
    let totalAmount = monthAmount * date;
    console.log(+totalAmount.toFixed(2));
    return +totalAmount.toFixed(2);
}

// function getGreeting(name) {
//     let greeting = `Привет, мир! Меня зовут ${name}`;
//     if (name == undefined || name == null || name == '') {
//         return `Привет, мир! Меня зовут Аноним`;
//     }
//     return greeting;
// }

function getGreeting(name) {
    return (`Привет, мир! Меня зовут ${name || "Аноним"}`);
}