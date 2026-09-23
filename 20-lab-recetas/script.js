/**
 *  Arreglo principal que almacena el catalogo de los objetos de las recetas
 *    @type {Object[]}
 */

const recipes = [];

// Declaracion de los objetos de las recetas originales
const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 ={
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli","carrot","bell pepper",],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};

// Inserción ordenada de recetas en la lista principal
recipes.push(recipe1, recipe2, recipe3);

/**
 *  Calcula la cantidad total de ingredientes presentes en un arreglo
 *    @param {string[]} ingredients - Lista de ingredientes de las recetas 
 *    @returns {number} Numero total de elementos en el arreglo de ingredientes
 */
const getTotalIngredients = (ingredients) => {
  return ingredients.length;
};

/**
 *  Determina el nivel de dificultad de una receta basándose en su tiempo de cocción
 *    @param {number} cookingTime - Tiempo de coccion en minutos 
 *    @returns {string} Nivel de dificultad ("easy", "medium", "hard")
 */
function getDifficultyLevel(cookingTime){
  if (cookingTime <= 30){
    return "easy";
    }else if(cookingTime <= 60){
        return "medium";
    } else {
        return "hard";
    }
}

// Pruebas iniciales de las funciones con la receta 1
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

// Actualizacion de las propiedades dinamicas de las tres recetas
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);

/* Output:
    4
    easy
    [
      {
        name: 'Spaghetti Carbonara',
        ingredients: [ 'spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper' ],
        cookingTime: 22,
        totalIngredients: 4,
        difficultyLevel: 'easy'
      },
      {
        name: 'Chicken Curry',
        ingredients: [
          'chicken breast',
          'coconut milk',
          'curry powder',
          'onion',
          'garlic'
        ],
        cookingTime: 42,
        totalIngredients: 5,
        difficultyLevel: 'medium'
      },
      {
        name: 'Vegetable Stir Fry',
        ingredients: [ 'broccoli', 'carrot', 'bell pepper' ],
        cookingTime: 15,
        totalIngredients: 3,
        difficultyLevel: 'easy'
      }
    ]
*/
