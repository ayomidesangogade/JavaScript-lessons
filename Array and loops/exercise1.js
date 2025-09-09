const nums = [10, 20, 30];
nums[nums.length - 1] = 99;
console.log(nums);

function getLastValue(array) {
    if (!Array.isArray(array))
        return "Parameter is not an array!";
    else
        return array[array.length - 1];
}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));

function arraySwap(array) {
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    array[0] = lastElement;
    array[array.length - 1] = firstElement;
    return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
console.log('');

for (let i = 5; i >= 0; i--) {
    console.log(i);
}
console.log('');

let i = 0;

while (i <= 10) {
    console.log(i);
    i += 2;
}
console.log('');

let j = 5;

while (j >= 0) {
    console.log(j);
    j--;
}

function addOne(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1);
    }
    return newArray;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + num);
    }
    return newArray;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

function addArrays(array1, array2) {
    if (array1.length !== array2.length) {
        console.log('Arrays must be of equal length!');
        return;
    }

    const addedArrays = [];

    for (let i = 0; i < array1.length; i++) {
        addedArrays.push(array1[i] + array2[i]);
    }
    return addedArrays;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

function countPositive(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            count++;
    }
    return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function min(array) {
    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min)
            min = array[i];
    }
    return min;
}

function max(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}

function minMax(nums) {
    if (Array.isArray(nums)) {
        if (nums.length === 0)
            return { min: null, max: null };
        else
            return { min: min(nums), max: max(nums) };
    } else
        return "Parameter is not an array!";
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

const randomWords = [
    "ocean", "lamp", "lamp", "lamp", "horizon",
    "flutter", "guitar", "guitar", "puzzle", "silver",
    "echo", "tiger", "marble", "shadow", "shadow",
    "compass", "feather", "feather", "feather", "crimson",
    "planet", "planet", "spark", "river", "river",
    "glide", "stone", "stone", "stone", "stone",
    "dawn", "dawn", "lamp", "lamp", "lamp",
    "tiger", "tiger", "tiger", "ocean", "ocean",
    "spark", "spark", "spark", "shadow", "shadow",
    "flutter", "flutter", "flutter", "flutter", "flutter",
    "echo", "echo", "echo", "marble", "marble",
    "marble", "silver", "silver", "compass", "compass",
    "planet", "planet", "planet", "planet", "planet",
    "crimson", "crimson", "crimson", "river", "river",
    "river", "river", "glide", "glide", "glide",
    "stone", "stone", "stone", "stone", "stone",
    "dawn", "dawn", "dawn", "dawn", "dawn",
    "lamp", "lamp", "lamp", "lamp", "lamp",
    "ocean", "ocean", "ocean", "tiger", "tiger",
    "spark", "spark", "spark", "spark", "spark"
];

function countWords(array) {
    const count = {};
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        num = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                num++;
            }
            count[array[i]] = num;
        }
    }
    return count;
}
// ['apple', 'grape', 'apple', 'apple', 'grape']
if (Array.isArray(randomWords))
    console.log(countWords(randomWords));
else
    console.log('Parameter is not an array!');