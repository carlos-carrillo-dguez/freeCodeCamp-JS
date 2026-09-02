/*
    Comprobar si el argumento proporcionado es un tipo de dato primitivo Booleano

    (argumento) => lo que se desea verificar
    return {Booleano} => Devuelve true si es un booleano o false en caso contrario

*/

function booWho(argumento){
  if (typeof argumento === "boolean"){
    return true;
  } else {
    return false;
  }
}

// Casos de prueba freeCodeCamp
console.log(booWho(true)); // Output: true
console.log(booWho(false)); // Output: true
console.log(booWho([1, 2, 3])); // Output: false
console.log(booWho([].slice)); // Output: false
console.log(booWho({ "a": 1 })); // Output: false
console.log(booWho(1)); // Output: false
console.log(booWho(NaN)); // Output: false
console.log(booWho("a")); // Output: false
console.log(booWho("true")); // Output: false
console.log(booWho("false")); // Output: false

/*
  Salida en terminal:
    true
    true
    false
    false
    false
    false
    false
    false
    false
    false    
*/