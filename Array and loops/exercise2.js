const myArray = ['hello', 'world', 'search', 'good'];

function wordChecker(myArray) {
    if (!Array.isArray(myArray)) {
        return 'Parameter is not an array!';
    }
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === 'search') {
            return i;
        }
    }
    return -1;
}

console.log(wordChecker(myArray));
console.log(wordChecker(['not', 'found']));
console.log(wordChecker(['hello', 'world', 'search', 'good', 'search']));

function findIndex(array, word) {
    if (!Array.isArray(array)) {
        return 'Parameter is not an array!';
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === word)
            return i;
    }
    return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

function unique(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[findIndex(array, array[i])] = array[i];
    }

    return newArray;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['green', 'red', 'red', 'green']));
console.log(unique(['red', 'green', 'green', 'red']));

function removeEgg(foods) {
    if (!Array.isArray(foods)) {
        return 'Parameter is not an array!';
    }

    const newFoods = [];
    const inFoods = foods.slice().reverse();
    let count = 0;
    for (let i = 0; i < inFoods.length; i++) {
        if (inFoods[i] === 'egg') {
            count++;
        }
        if (inFoods[i] === 'egg' && count <= 2) {
            continue;
        }
        newFoods.push(inFoods[i]);
    }
    return newFoods.reverse();
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);

for (let i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        continue;
    }
    if (i % 3 === 0) {
        console.log('Fizz');
        continue;
    }
    if (i % 5 === 0) {
        console.log('Buzz');
        continue;
    }
    console.log(i);
}