// Suma
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5)); //7
console.log(calculateSum(10, 10)); //20
console.log(calculateSum(5, 5)); //10

// Resta
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5)); //17
console.log(calculateDifference(12, 1)); //11
console.log(calculateDifference(17, 9)); //8

// Multiplicacion
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5)); //65

// Division
function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11)); //0.6363636363636364
console.log(calculateQuotient(3, 0)); //Error: Division by zero

// Potencia al cuadrado
function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2)); //4
console.log(calculateSquare(9)); //81

// Raiz cuadrada 
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25)); //5
console.log(calculateSquareRoot(100)); //10