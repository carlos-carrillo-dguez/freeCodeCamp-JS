// Mensaje de saludo
console.log ("Hello! I'm your coding fun fact guide!"); // Hello! I'm your coding fun fact guide!

// Creacion de variables principales
let botName = "Carlos";
let botLocation = "Spain";
let favoriteLanguage = "JavaScript";

// Mensaje en pantalla sobre el nombre, ubicacion y lenguaje favorito
console.log ("My name is " + botName + " and I live on " + botLocation + "."); // My name is Carlos and I live on Spain.
console.log("My favorite programming language is " + favoriteLanguage + "."); // My favorite programming language is JavaScript.

// Declaracion nueva variable y la primera sobreescritura del mensaje
let codingFact = "PHP";
codingFact = "The most popular programming language is " +  favoriteLanguage + "."; // Sobreescribe "PHP" antes de imprimir
console.log(codingFact); // The most popular programming language is JavaScript.

// Primera reasignacion de la variable codingFact y su mensaje
codingFact = "Language new " + favoriteLanguage + ".";
console.log(codingFact); // Language new JavaScript.

// Segunda reasignacion de la variable codigFact y su mensaje
codingFact = "Uncommonly used programming language " + favoriteLanguage + ".";
console.log(codingFact); // Uncommonly used programming language JavaScript.

// Mensaje de despedida
console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + "."); // It was fun sharing these facts with you. Goodbye! - Carlos from Spain.
