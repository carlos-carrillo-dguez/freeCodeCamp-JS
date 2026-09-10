const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

/**
 *  Obtiene la especie del animal
 *      @param {Object} animal - El objeto que representa al animal
 *      @returns {string} La especie del animal
 */

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger)); // Output: Tiger

/**
 *  Obtiene la edad del animal
 *      @param {Object} animal - El objeto que representa al animal
 *      @returns {number} La edad del animal
 */

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger)); // Output: 5

/**
 *  Añade un habitat al objeto animal
 *      @param {Object} animal - El objeto animal a modificar
 *      @param {string} habitat - El nombre del habitat a asignar
 *      @returns {Object} El objeto animal actualizado con el nuevo hábitat
 */

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest")); // Output: { species: 'Tiger', age: 5, isEndangered: true, habitat: 'Rainforest' }

/**
 *  Actualizar la edad de un animal
 *      @param {Object} animal - El objeto animal a modificar 
 *      @param {number} newAge - La nueva edad a asignar
 *      @returns {Object} El objeto animal actualizado con la nueva edad
 */

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12)); // Output: { species: 'Elephant', age: 12, isEndangered: true }

/**
 *  Elimina la propiedad de estado de peligro de extincion de un animal
 *      @param {Object} animal - El objeto animal a modificar 
 *      @returns {Object} El objeto animal actualizado
 */


const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger)); // Output: { species: 'Tiger', age: 5, habitat: 'Rainforest' }

/**
 *  Comprueba si el animal tiene la propiedad "habitat"
 *      @param {Object} animal - El objeto animal a verificar 
 *      @returns {boolean} `true` si el objeto contiene la propiedad "habitat", de lo contrario devuelve `false`
 */


const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger)); // Output: true
console.log(hasHabitat(elephant)); // Output: false


/**
 *  Accede dinamicamente a una propuedad del objeto animal mediante la notacion de corchete []
 *      @param {Object} animal - El objeto animal
 *      @param {string} propertyName - El nombre de la propiedad a consultar
 *      @returns {*} El valor contenido en la propiedad
 */

const getProperty = (animal, propertyName) => {
  return animal[propertyName];  
}
console.log(getProperty(tiger, "species")); // Output: Tiger
console.log(getProperty(elephant, "age")); // Output: 12