const product = {
    name: "Shirt",
    price: 2095,
    "delivery-time": "1 day",
    ratings: {
        stars: 4.5,
        counts: 87
    }
}
const productString = JSON.stringify(product);
console.log(JSON.parse(productString));
const { stars } = product.ratings;
console.log(stars);
