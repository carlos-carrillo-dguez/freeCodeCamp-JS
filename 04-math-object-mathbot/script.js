// Configuracion del bot y saludo inicial
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

// Explicacion de Math.random()
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

// Generar numero aleatorio entre el 0 y el 1
const randomNum = Math.random();
console.log(randomNum);

// Definicion el rango minimo y maximo
console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

// Generar numero decimal aleatorio con Math.random() dentro de un rango
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

// Redondear hacia abajo con Math.floor() 
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

// Generar numero entero aleatorio dentro de un rango
console.log("Now, generate a random integer between two values.");
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

// Redondear hacia arriba con Math.ceil()
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// Redondear al entero mas cercano con Math.round()
console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);
const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

// Obtener valores maximo y minimo con Math.max() y Math.min()
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

// Mensaje de despedida
console.log("It was fun learning about the different Math methods with you!");
