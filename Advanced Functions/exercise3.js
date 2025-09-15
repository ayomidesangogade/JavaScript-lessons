const multiply = (num1, num2) => console.log(num1 * num2);

multiply(2, 3);
multiply(7, 10);

const countPositive = (array) => {
    if (!Array.isArray(array)) {
        console.log('Parameter is not an array!');
        return;
    }
    let count = 0;
    array.forEach((num) => {
        if (num > 0) {
            count++
        }
    })
    console.log(count);
}

countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);

const addNum = (array, num) => {
    if (!Array.isArray(array)) {
        console.log('Parameter is not an array!');
        return;
    }
    console.log(array.map(element => element + num));
}

addNum([1, 2, 3], 2);
addNum([-2, -1, 0, 99], 2);

const removeEgg = (array) => {
    if (!Array.isArray(array)) {
        console.log('Parameter is not an array!');
        return;
    }
    let count = 0;
    console.log(array.filter(element => {
        if (element === 'egg') {
            count++;
        }
        if (element === 'egg' && count <= 2)
            return false;
        else
            return true;
    }));
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);