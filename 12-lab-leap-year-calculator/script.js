// Creacion de la variable global year para su evaluacion
let year = 2000;

/* La condicion (if / else) evalúa las siguientes reglas:
    Un año es bisiesto si es divisible entre 4.
    No es bisiesto si es divisible entre 100.
        A MENOS que también sea divisible entre 400.
 */

function isLeapYear(num){
    if ((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0)){
        return num + " " + "is a leap year.";
    } else{
        return num + " " + "is not a leap year.";
    }
}

/* 
    Creacion de la variable result donde se almacena el resultado de la llamada a la function isLeapYear
    y su impresion en consola
*/

let result = isLeapYear(year);
console.log(result); // Output: 2000 is a leap year.

// Actualización de la variable con diferentes años
year = 2024;
console.log(isLeapYear(year)); // Output: 2024 is a leap year.
year = 2000;
console.log(isLeapYear(year)); // Output: 2000 is a leap year.
year = 1900;
console.log(isLeapYear(year)); // Output: 1900 is not a leap year.