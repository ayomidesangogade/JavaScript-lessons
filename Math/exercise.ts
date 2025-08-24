let temperatureInCelsiusTS: number = 25;
function fahrenheitCalculatorTS(temperature: number): number {
    const fahrenheit = (temperature * (9/5)) + 32;
    return fahrenheit;
}
console.log(fahrenheitCalculatorTS(temperatureInCelsiusTS));

let temperatureInFahrenheitTS: number = 86;
let celsiusTS: number = (temperatureInFahrenheitTS - 32) * (5/9);
console.log(celsiusTS);

let temperatureInCelsius2TS: number = -5;
console.log(fahrenheitCalculatorTS(temperatureInCelsius2TS));