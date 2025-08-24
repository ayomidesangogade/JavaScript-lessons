let temperatureInCelsius = 25;
function fahrenheitCalculator(temperature) {
    const fahrenheit = (temperature * (9/5)) + 32;
    return fahrenheit;
}
console.log(fahrenheitCalculator(temperatureInCelsius));

let temperatureInFahrenheit = 86;
let celsius = (temperatureInFahrenheit - 32) * (5/9);
console.log(celsius);

let temperatureInCelsius2 = -5;
console.log(fahrenheitCalculator(temperatureInCelsius2));