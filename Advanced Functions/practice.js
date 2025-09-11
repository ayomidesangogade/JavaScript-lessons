setTimeout(() => {
    console.log('LOL');
}, 3000);

const product = {
    name: 'Shirt',
    price: 2065,
    ratings: {
        stars: 4.5,
        counts: 87
    },
    fun: function () { console.log('I love JavaScript!') }
}
delete product.name
console.log(product);
product.fun();
product.name = 'Shirt';
console.log(product);

const { price } = product;
const object = {
    price
};
console.log(object);

const array = [1, 2, 3];
array[3] = 6;
console.log(array);
const [element] = array;
console.log(element);
console.log(Array.isArray(array));
array.splice(0, 2);
console.log(array);
const array2 = array.slice();
console.log(array2);

console.log(JSON.stringify(object));

// setInterval(function () { console.log('Fuck you nigga!') }, 1000);