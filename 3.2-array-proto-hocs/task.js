function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((item, index) => item === arr2[index]);
}

function memorize(fn, limit) {
    let memory = [];
    return function(...args) {
        let index = memory.findIndex(function(element, index) {
            if (compareArrays(element.args, args)) {
                return true;
            }
            return false;
        });

        if (index === -1) {
            if (memory.length + 1 === limit) {
                memory.shift();
            }
            let res = fn(...args);
            memory.push({ args: args, result: res });
            return res;
        }
        return memory[index].result;
    }
}


const summa = (a, b) => a + b;
const memorizedSum = memorize(summa, 5);
memorizedSum(2, 10);
memorizedSum(2, 10);
memorizedSum(5, 5);
memorizedSum(5, 5);