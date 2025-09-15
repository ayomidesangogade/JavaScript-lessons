const product = {
    name: 'Shirt',
    price: 1200,
    'delivery-time': '2 days',
    ratings: {
        stars: 4.5,
        counts: 87
    },
    method() {
        console.log('I love JavaScript!');
    }
}

console.log(JSON.stringify(product));
product.method();
const { stars } = product.ratings;
console.log(stars);
delete product.price;
console.log(product);
product.price = 1000;
console.log(product);

const myArray = [1, 2, 3, 4, 5];
const [first, second, third] = myArray;
console.log(first, second, third);
myArray.push(7);
console.log(myArray);
myArray.splice(0, 2);
console.log(myArray);
const secondArray = myArray.slice();
secondArray[4] = 8;
console.log(secondArray);

myArray.forEach(function (element) {
    if (element === 3) return;
    console.log(element);
});
console.log(myArray.map((element) => element * 2));
console.log(myArray.filter((element) => { if (element > 3) return true; }));

setTimeout(() => {
    console.log('God is great!');
}, 2000);

let intervalId;
let stop = 0;

intervalId = setInterval(() => {
    console.log('God is great!');
    stop++;
    stopInterval();
}, 2000);

function stopInterval() {
    if (stop === 10)
        clearInterval(intervalId);
}