const product = {
    name: "Shirt",
    price: 256,
    ratings: {
        stars: 4.5,
        counts: 87
    },
    fun: () => console.log('I love JavaScript')
}

product.fun();
delete product.price;
console.log(product);
product.price = 1024;
console.log(product)
const { stars } = product.ratings;
console.log(stars);
const productString = JSON.stringify(product);
console.log(JSON.parse(productString));