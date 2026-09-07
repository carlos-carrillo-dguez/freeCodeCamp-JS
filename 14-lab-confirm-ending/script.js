/*
    Creamos la funcion confirmEnding. dentro de ella le damos dos argumentos:
        1. cadenaA => el texto completo a evaluar (String)
        2. cadenaB => la terminación o subcadena que queremos verificar (String)
    
        if => Extrae los últimos caracteres de 'cadenaA' usando slice() con un índice 
            negativo (-cadenaB.length) y comprueba si ese fragmento es estrictamente 
            igual a 'cadenaB'.
                Si se cumple devuelve: true
        else => Si el final no coincide, devuelve false
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
