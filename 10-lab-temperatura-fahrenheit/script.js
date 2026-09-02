/* 
   - Parametro => "num" --> es la representacion de la temperatura en ºC
   - Retorno: Numero correspondiente a la temperatura en ºF
   - Formula aplicada: Fahrenheit = Celsius * (9/5) + 32

*/

function convertCtoF(num){
    return num *(9/5) + 32;
}

// Prueba de ejecucion con su resultado en terminal
console.log(convertCtoF(-30)); // Output: 22
console.log(convertCtoF(-10)); // Output: 14
console.log(convertCtoF(-30)); // Output: 22
console.log(convertCtoF(0)); // Output: 32
console.log(convertCtoF(20)); // Output: 68
console.log(convertCtoF(30)); // Output: 86