/* 
   - Parametro => "num" --> es la representacion de la temperatura en ºC
   - Retorno: Numero correspondiente a la temperatura en ºF
   - Formula aplicada: Fahrenheit = Celsius * (9/5) + 32

*/

function convertCtoF(num){
    return num *(9/5) + 32;
}

// Prueba de ejecucion con su resultado en terminal
console.log(convertCtoF(-30)); //22
console.log(convertCtoF(-10)); //14
console.log(convertCtoF(-30)); //22
console.log(convertCtoF(0)); //32
console.log(convertCtoF(20)); //68
console.log(convertCtoF(30)); //86