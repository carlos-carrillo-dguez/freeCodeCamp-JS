const questions = [
{
  category: "Programacion",
  question: "¿Qué significan las siglas SQL?",
  choices: ["Structured Question Optional", "Structured Query Language", "Structured Query Logic"],
  answer: "Structured Query Language"
  },
  {
  category: "Programacion",
  question: "¿Qué lenguaje de programación se utiliza para dar estilos a las páginas web?",
  choices: ["C#", "JavaScript", "CSS"],
  answer: "CSS"
  },
  {
  category: "Programacion",
  question: "¿Qué lenguaje de programación se utiliza para programar el comportamiento de las páginas web?",
  choices: ["CSS", "SQL", "JavaScript"],
  answer: "JavaScript"
  },
  {
  category: "Programacion",
  question: "¿Qué palabra clave se utiliza en JavaScript para declarar una variable que no puede ser modificada?",
  choices: ["const", "let", "int"],
  answer: "const"
  },
  {
  category: "Programacion",
  question: "¿Qué metodo se utiliza para dar una respuesta aleatoria?",
  choices: ["Math.floor()", "Math.ceil()", "Math.random()"],
  answer: "Math.random()"
  }
];

/**
 * Selecciona una pregunta aleatoria de un array de preguntas
 *    @param {Object[]} question - Array con todos los objetos de preguntas 
 *    @returns {Object} El objeto de la pregunta seleccionada al azar
 */
function getRandomQuestion(question){
  const resultadoRandom = Math.floor(Math.random() * question.length);
  return question[resultadoRandom];
}
/**
 *  Selecciona una opcion aleatoria de una lista de opciones
 *    @param {string[]} choices - Array con las opciones de respuesta
 *    @returns {string} Opcion de texto seleccionada al azar
 * 
 */


function getRandomComputerChoice(choices){
  const resultadoComputer = Math.floor(Math.random() * choices.length);
  return choices[resultadoComputer];
}
/**
 * Compara la eleccion de la maquina con la respuesta correcta y devuelve un mensaje de resultado
 *    @param {Object} question - El objeto de la pregunta actual que contiene la propiedad 'answer'
 *    @param {string} computerChoice - La opcion seleccionada por la maquina
 *    @returns {string} Mensaje indicando si la computadora acertó o cuál era la respuesta correcta
 */

function getResults(question, computerChoice){
  
  if (computerChoice === question.answer){
    return "The computer's choice is correct!";
  } else{
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  } 
}

// 
const preguntaSeleccionada = getRandomQuestion(questions);
const eleccionMaquina = getRandomComputerChoice(preguntaSeleccionada.choices);
const resultado = getResults(preguntaSeleccionada, eleccionMaquina);

console.log("Pregunta:", preguntaSeleccionada.question);
console.log("Elección de la maquina:", eleccionMaquina);
console.log("Resultado final:", resultado);