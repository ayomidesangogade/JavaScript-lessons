const array = ['wash dishes', 'sleep', 'read'];
array.forEach(function (element, index) {
    console.log(element, index);
})

setTimeout(function () {
    console.log('Hello World!');
}, 2000)