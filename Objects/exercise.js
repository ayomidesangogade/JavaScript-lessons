const product = {
    name: 'basketball',
    price: 2095
}

console.log(product);

product.price += 500;
console.log(product);

product['delivery-time'] = '3 days';
console.log(product);

const product2 = {
    name: 'shirt',
    price: 2595
}

function comparePrice(product1, product2) {
    if (!product1 || !product2) {
        console.log('Product is missing!');
        return;
    }
    if (product1.price > product2.price) 
        console.log('product2 is less expensive');
    else if (product1.price < product2.price)
        console.log('product1 is less expensive');
    else if (product1.price === product2.price)
        console.log('Products are of the same price');
}

comparePrice(product);

function isSameProduct(product1, product2) {
    if (!product1 || !product2) {
        console.log('Product is missing!');
        return;
    }
    if(product1.name === product2.name && product1.price === product2.price)
        console.log('The products are the same.');
    else
        console.log('The products are not the same.');
}

isSameProduct(product, product2);
console.log('Good Morning'.toLowerCase());