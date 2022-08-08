//declaring and initialising a constant variable, kelvin
const kelvin = 293;
//storing converted value in celsius variable from kelvin
let celsius = kelvin - 273;
//storing converted value in farenheit using celsius variable
let farenheit = celsius * (9/5) + 32;
//using the floor() method of Math object on farenheit to round of to closest whole number
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Farenheit`);

//converting celsius to the Newton scale
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} Newton`);