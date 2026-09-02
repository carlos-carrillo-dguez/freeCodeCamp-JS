// Suma
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5)); // Output: 7
console.log(calculateSum(10, 10)); // Output: 20
console.log(calculateSum(5, 5)); // Output: 10

// Resta
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5)); // Output: 17
console.log(calculateDifference(12, 1)); // Output: 11
console.log(calculateDifference(17, 9)); // Output: 8

// Multiplicacion
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5)); // Output: 65

// Division
function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11)); // Output: 0.6363636363636364
console.log(calculateQuotient(3, 0)); // Output: Error: Division by zero

// Potencia al cuadrado
function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2)); // Output: 4
console.log(calculateSquare(9)); // Output: 81

// Raiz cuadrada 
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25)); // Output: 5
console.log(calculateSquareRoot(100)); // Output: 10