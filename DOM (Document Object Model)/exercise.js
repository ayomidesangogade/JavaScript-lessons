const product = {
    name: "Shirt",
    price: 19.23,
    'delivery-time': '1 day',
    ratings: {
        stars: 4.5,
        counts: 87
    },
    fun: (text) => console.log(text)
};

product.fun(product.name);
const productString = JSON.stringify(product);
console.log(JSON.parse(productString));

const { price } = product;
console.log(price);
