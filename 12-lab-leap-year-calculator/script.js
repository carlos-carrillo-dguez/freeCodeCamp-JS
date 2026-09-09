// Creacion de la variable global
let year = 2000;

/**
 *  Determina si un año dado es bisiesto aplicando las reglas del calendario gregoriano.
 *      @param {number} num - año de 4 digitos
 *      @returns {string} Mensaje descriptivo que confirma si el año es bisiesto o no. 
 */

function isLeapYear(num){
    if ((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0)){
        return num + " " + "is a leap year.";
    } else{
        return num + " " + "is not a leap year.";
    }
}

let result = isLeapYear(year);
console.log(result); // Output: 2000 is a leap year.

// Actualización de la variable con diferentes años
year = 2024;
console.log(isLeapYear(year)); // Output: 2024 is a leap year.
year = 2000;
console.log(isLeapYear(year)); // Output: 2000 is a leap year.
year = 1900;
console.log(isLeapYear(year)); // Output: 1900 is not a leap year.