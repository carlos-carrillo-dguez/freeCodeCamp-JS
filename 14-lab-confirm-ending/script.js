/**
 *  Evaluamos si una cadena de texto termina con una subcadena especifica
 *      @param {string} cadenaA 
 *      @param {string} cadenaB 
 *      @returns {boolean} `true` si la cadena termina con el objetivo, pero si es al contrario devuelve `false`
 */

function confirmEnding(cadenaA, cadenaB){
    if (cadenaA.slice(-cadenaB.length) === (cadenaB)){
        return true;
    } else {
        return false;
    }
}

//Pruebas
console.log(confirmEnding("Bastian", "n")); //Output: true
console.log(confirmEnding("Congratulation", "on")); //Output: true
console.log(confirmEnding("Connor", "n")); //Output: false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //Output: false
console.log(confirmEnding("He has to give me a new name", "name")); //Output: true
console.log(confirmEnding("Open sesame", "same")); //Output: true
console.log(confirmEnding("Open sesame", "sage")); //Output: false
console.log(confirmEnding("Open sesame", "game")); //Output: false
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain")); //Output: false
console.log(confirmEnding("Abstraction", "action")); //Output: true
