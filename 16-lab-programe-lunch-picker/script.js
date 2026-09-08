// Creacion de la variable global para almacenar el menu de almuerzos inicial
let lunches = [];

/**
 *  Añadir un elemento al final del menu:
 *      @param {Array} array - Matriz de almuerzos.
 *      @param {string} item - Elemento a añadir.
 *      @return {Array} La matriz actualizada.
*/
function addLunchToEnd (array, item){
    
    array.push(item);
    console.log(`${item} added to the end of the lunch menu.`);
    return array;
}
/** 
*   Añade un elemento al inicio del menu:
*       @param {Array} array - Matriz de almuerzos.
*       @param {string} item - Elemento a añadir.
*       @return {Array} La matriz actualizada.
*/
function addLunchToStart (array, item){
    array.unshift(item);
    console.log(`${item} added to the start of the lunch menu.`);
    return array;
}
/** 
*   Elimina el último elemento del menu:
*       @param {Array} array - Matriz de almuerzos.
*       @return {Array} La matriz actualizada.
*/
function removeLastLunch (array){
    if (array.length > 0){
        let eliminarArray = array.pop();
        console.log(`${eliminarArray} removed from the end of the lunch menu.`);
        return array;
    }else{
        console.log("No lunches to remove.");
        return array;
    }
}
/**
*   Elimina el primer elemento del menu:
*       @param {Array} array - Matriz de almuerzos.
*       @return {Array} La matriz actualizada.
*/
function removeFirstLunch(array){
    if(array.length > 0){
        let eliminarPrimerArray = array.shift();
        console.log(`${eliminarPrimerArray} removed from the start of the lunch menu.`);
        return array
    } else {
        console.log("No lunches to remove.");
        return array;
    }
}
/**
*   Selecciona y muestra un elemento aleatorio del menu sin modificar la matriz.
*       @param {Array} array - Matriz de almuerzos.
*/
function getRandomLunch (array){
    if(array.length > 0){
        let contarArray = Math.floor(Math.random()*array.length);
        let arrayContado = array[contarArray];
        console.log(`Randomly selected lunch: ${arrayContado}`);
    }else{
        console.log("No lunches available.");
    }
}
/** 
*   Muestra todos los elementos del menu separados por comas.
*       @param {Array} array - Matriz de almuerzos.
*/
function showLunchMenu (array){
    if(array.length > 0){
        let arryaJoin = array.join(", ");
        console.log(`Menu items: ${arryaJoin}`);
    }else{
        console.log("The menu is empty.");
    }
}

// Pruebas
   
    // Funciones de modificar

console.log(addLunchToEnd(lunches, "Tacos")); // Output: Tacos added to the end of the lunch menu. [ 'Tacos' ]
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger")); // Output: Burger added to the end of the lunch menu. [ 'Pizza', 'Tacos', 'Burger' ]
console.log(addLunchToStart(lunches, "Sushi")); // Output: Sushi added to the start of the lunch menu. [ 'Sushi', 'Tacos' ]
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza")); // Output: Pizza added to the start of the lunch menu. [ 'Pizza', 'Burger', 'Sushi' ]
console.log(removeLastLunch(["Stew", "Soup", "Toast"])); // Output: Toast removed from the end of the lunch menu. [ 'Stew', 'Soup' ]
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"])); // Output: Noodles removed from the end of the lunch menu. [ 'Sushi', 'Pizza' ]
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"])); // Output: Salad removed from the start of the lunch menu. [ 'Eggs', 'Cheese' ]
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"])); // Output: Sushi removed from the start of the lunch menu. [ 'Pizza', 'Burger' ]
    
    // Funciones de mostrar

getRandomLunch([]); // Output: No lunches available.
getRandomLunch(["Pizza", "Tacos", "Burger"]); // Output: Randomly selected lunch: Burger
showLunchMenu(["Greens", "Corns", "Beans"]); // Output: Menu items: Greens, Corns, Beans
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]); // Output: Menu items: Pizza, Burger, Fries, Salad