const product = {
    name: 'Shirt',
    price: 12.00,
    ratings: {
        counts: 87,
        stars: 4.5
    },
    fun: () => console.log('This is a function inside an object')
};
product.price = 14.49;
product.fun();
console.log(product);

const { price } = product;
console.log(price);