String.prototype.isPalindrome = function() {
    console.log(this);
    let newstr;
    let newstrarr;
    let palindrome;

    if (typeof this !== "number") {
        newstr = this.toLowerCase();
    } else {
        newstr = this.toString();
    }

    newstrarr = newstr.split('');
    newstr = newstr.replace(/\s/g, '');

    newstrarr.reverse();

    palindrome = newstrarr.join('').replace(/\s/g, '');

    if (+palindrome !== NaN) {
        +palindrome;
    }

    if (palindrome === newstr) {
        return true;
    } else {
        return false;
    }
}

// Задача № 2
function getAverageMark(marks) {
    let sum = 0;
    if (marks.length == 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return Math.round(sum / marks.length);
}


// Задача № 3
function checkBirthday(birthday) {
    let now = Date.now(); //текущая дата в мс
    birthday = Date.parse(birthday); // дата рождения в мс
    let diff = now - birthday; // разница в мс
    let age = diff / 31557600000; // делим разницу на кол-во мс в году
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}