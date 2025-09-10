const myArray = [1, 2, 3, 4, 5, 6];
myArray.splice(0, 3);
const array2 = myArray.slice();
console.log(array2);

for (let i = 0; i < 7; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}