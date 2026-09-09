// Título inicial del taller
console.log("Grocery shopping list"); // Output: Grocery shopping list

// Declaración e inicialización del array
const shoppingList = [];

// Mensaje informativo sobre frutas
console.log("It will be nice to have some fruit to eat."); // Output: It will be nice to have some fruit to eat.

// Como agregar el primer elemento `("Apples")` que aparecera al final por el metodo (.push)
shoppingList.push("Apples");

/**
 * 
 * @param {string[]} arr - Array con los elementos de la lista de la compra 
 * @returns {string} Mensaje formateando que indica la lista actual por pantalla
 */

// Creación de la función getShoppingListMsg para formatear la salida de la lista shoppingList[]
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

// Impresión de la lista inicial
console.log(getShoppingListMsg(shoppingList)); // Output: Current Shopping List: Apples

// Agregar el elemento `("Grapes")` al final (`.push()`) y lo imprimimos
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList)); // Output: Current Shopping List: Apples,Grapes

// Mensaje informativo sobre aceite
console.log("It looks like we need to get some cooking oil."); // Output: It looks like we need to get some cooking oil.

// Agregar el elemento "Vegetable Oil" al inicio mediante el metodo (`.unshift()`) y lo imprimimos por pantalla
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList)); // Output: Current Shopping List: Vegetable Oil,Apples,Grapes

// Agregar múltiples elementos `("Popcorn","Beef Jerky", "Potato Chips")` al final (`.push()`) e imprimir
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList)); // Output: Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky,Potato Chips

// Mensaje informativo sobre la comida ultraprocesada
console.log("This looks like too much junk food."); // Output: This looks like too much junk food.

// Eliminar el último elemento (`.pop()`) y lo imprimimos
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList)); // Output: Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky

// Mensaje en pantalla, agregamos un elemento al inicio `("Chocolate Cake")` y lo imprimimos en pantalla
console.log("It might be nice to get a dessert."); // Output: It might be nice to get a dessert.
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList)); // Output: Current Shopping List: Chocolate Cake,Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky 

// Mensaje de cambio de opinión de la comida saludable
console.log("On second thought, maybe we should be more health conscious."); // Output: On second thought, maybe we should be more health conscious.

// Eliminar el primer elemento (`.shift()`)
shoppingList.shift();

// Reasignar directamente el valor en el índice `[0]`
shoppingList[0] = "Canola Oil";

// Salida final de la lista completa
console.log(getShoppingListMsg(shoppingList)); // Output: Current Shopping List: Canola Oil,Apples,Grapes,Popcorn,Beef Jerky

/*
  Output:
  - Grocery shopping list
  - It will be nice to have some fruit to eat.
  - Current Shopping List: Apples
  - Current Shopping List: Apples,Grapes
  - It looks like we need to get some cooking oil.
  - Current Shopping List: Vegetable Oil,Apples,Grapes
  - Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky,Potato Chips
  - This looks like too much junk food.
  - Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky
  - It might be nice to get a dessert.
  - Current Shopping List: Chocolate Cake,Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky
  - On second thought, maybe we should be more health conscious.
  - Current Shopping List: Canola Oil,Apples,Grapes,Popcorn,Beef Jerky
*/