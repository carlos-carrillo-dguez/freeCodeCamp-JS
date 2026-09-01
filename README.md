# Certificacion de JavaScript en freeCodeCamp

Este repositorio reúne los laboratorios y ejercicios prácticos que voy completando como parte de la certificación 
    **JavaScript Algorithms and Data Structures** de freeCodeCamp.

------------------------------------------------------------------------------------------------------------------------------------------------

## Tecnologías y Conceptos Aprendidas.

* **Sintaxis básica de JavaScript:** 
    Declaración de variables (`let`, `const`), tipos de datos primitivos (cadenas de texto, booleanos, números) y verificación de tipos con el operador `typeof`.
* **Manipulación de cadenas:** 
    Concatenación de variables, búsqueda de posiciones (`indexOf()`), extracción de subcadenas (`slice()`) y repetición dinámica de caracteres (`repeat()`).
* **Control de flujo y manejo de casos borde:** 
    Estructuras condicionales (`if`, `if...else`), operadores de comparación (`>=`, `==`, `===`), evaluación de valores *truthy* y *falsy*, y validación de errores lógicos (como la prevención de división por cero).
* **Objeto Math:** 
    Cálculo de potencias y raíces cuadradas (`Math.pow()`, `Math.sqrt()`), generación de números aleatorios en un rango y redondeo de valores (`Math.random()`, `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.max()`, `Math.min()`).
* **Funciones y modularidad:** 
    Declaración de funciones, paso de parámetros/argumentos, retorno de valores (`return`) y reutilización de código.
* **Operadores JavaScript:** 
    Operadores aritméticos básicos, operador de exponenciación (`**`) y comparación estricta (`===`).

------------------------------------------------------------------------------------------------------------------------------------------------

## Contenido.

* `01-lab-sentence-maker/`
    Ejercicio enfocado en la reasignación de variables y concatenación de cadenas de texto para generar historias dinámicas.
* `02-lab-fun-fact-bot/`
    Proyecto de bot interactivo que muestra datos curiosos reutilizando variables y actualizando su contenido paso a paso.
* `03-logic-checker-app/`
    Práctica utilizando condicionales y evaluación de booleanos.
* `04-math-object-mathbot`
    Aplicar los diferentes métodos del objeto Math.
* `05-lab-random-fortune`
    Ejercicio práctico enfocado en la generación de números aleatorios con el objeto `Math` y el uso de estructuras condicionales (`if...else`) para la selección dinámica de fortunas.
* `06-calculator-lab`
    Implementación de una calculadora modular en JS utilizando funciones con parámetros, operadores aritméticos, exponenciación (`**`), métodos como `Math.sqrt()` y validación de casos borde (como la prevención de división por cero).
* `07-lab-boo-who`
   Creación de una función de verificación booleana (`booWho`) utilizando el operador `typeof` y evaluación de tipos de datos primitivos para determinar si un valor es estrictamente de tipo booleano (`true` o `false`).
* `08-lab-enmascarar-email`
    Creación de una función para ocultar el nombre de usuario de un correo electrónico mediante asteriscos (`maskEmail`), conservando la primera y última letra del usuario junto al dominio usando `indexOf()`, `slice()` y `repeat()`.


------------------------------------------------------------------------------------------------------------------------------------------------

## ¿Cómo ejecutarlos  los ejercicios?

Puedes clonar este repositorio y ejecutar cualquier archivo con **Node.js**:

```bash
node 01-lab-sentence-maker/script.js
node 02-lab-fun-fact-bot/script.js
node 03-logic-checker-app/script.js
node 04-math-object-mathbot/script.js
node 05-lab-random-fortune/script.js
node 06-calculator-lab/script.js
node 07-lab-boo-who/script.js
node 08-lab-enmascarar-email/script.js