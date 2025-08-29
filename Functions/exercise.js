function greet(name) {
    if (!name)
        console.log('Hello there!');
    else
        console.log(`Hello ${name}!`);
}

greet();

function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

function convertTemperature(degrees, unit) {
    if (unit === 'C')
        return `${convertToFahrenheit(degrees)}C`;
    else if (unit === 'F')
        return `${convertToCelsius(degrees)}F`;
}

console.log(convertTemperature(25,'C'));
console.log(convertTemperature(86,'F'));

function convertLength(length, from, to) {
    let kilometres = length * 1.6;
    let miles = length / 1.6;
    
    if (from === 'miles' && to === 'ft')
        miles = length * 5280;
    else if (from === 'km' && to === 'ft')
        kilometres = length * 3281;
    else if (from === 'ft' && to === 'km')
        return `${length / 3281} km`;
    else if (from === 'ft' && to === 'miles')
        return `${length / 5280} miles`;

    if (from === 'miles' && to === 'km')
        return `${kilometres} km`;
    else if (from === 'km' && to === 'miles') 
        return `${miles} miles`;
    else if (from === 'miles' && to === 'miles')
        return `${length} miles`;
    else if (from === 'km' && to === 'km')
        return `${length} km`;
    else if (from === 'km' && to === 'ft')
        return `${kilometres} ft`;
    else if (from === 'miles' && to === 'ft')
        return `${miles} ft`;
    else if (from === 'ft' && to === 'ft')
        return `${length} ft`;
    else
        return `Invalid unit: ${from || to}`;
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));
console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'km', 'ft'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(16405, 'ft', 'km'));
console.log(convertLength(26400, 'ft', 'miles'));
console.log(convertLength(5, 'lbs', 'lbs'));