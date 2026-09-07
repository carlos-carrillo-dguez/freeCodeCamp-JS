/*
    Creamos la funcion truncateString. dentro de ella le damos dos argumentos:
        1. cadena => un texto (String)
        2. num => la longitud maxima deseada (number)
    
        if => Comprueba si la longitud total de la cadena (en caracteres) es mayor que num.
            Si se cumple: recorta la cadena desde el índice 0 hasta 'num' usando slice() y le concatena "..." al final.
        else => Si la longitud es menor o igual a 'num', devuelve la cadena original sin cambios
*/

function truncateString (cadena, num){
    if (cadena.length > num ){
        return cadena.slice(0, num) + "...".repeat(1);
    } else {
        return cadena;
    }
}

//Pruebas
console.log(truncateString("A-tisket a-tasket A green and yellow, basket", 8));
// Output: A-tisket...

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// Output: Peter Piper...

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket" .length));
// Output: A-tisket a-tasket A green and yellow basket

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket" .length + 2));
// Output: A-tisket a-tasket A green and yellow basket

console.log(truncateString("A-", 1));
// Ouput: A...

console.log(truncateString("Absolutely Longer", 2));
// Ouput: Ab...