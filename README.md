# Certificacion de JavaScript en freeCodeCamp

Este repositorio reúne los laboratorios y ejercicios prácticos que voy completando como parte de la certificación 
    **JavaScript Algorithms and Data Structures** de freeCodeCamp.

------------------------------------------------------------------------------------------------------------------------------------------------

## Tecnologías y Conceptos Aprendidas.

* **Sintaxis básica de JavaScript:** 
    Declaración de variables (`let`, `const`), tipos de datos primitivos (cadenas de texto, booleanos, números) y verificación de tipos con el operador `typeof`.
* **Manipulación de cadenas:** 
    Concatenación de variables, búsqueda de posiciones (`indexOf()`), extracción de subcadenas (`slice()`) y repetición dinámica de caracteres (`repeat()`), evaluación de longitud (`.length`) y truncado condicional con puntos suspensivos (`...`) y extracción desde el final de un texto usando índices negativos (`-cadenaB.length`) para evaluar sufijos sin depender de `.endsWith()`.
* **Control de flujo y manejo de casos borde:** 
    Estructuras condicionales (`if`, `if...else`), operadores de comparación (`>=`, `==`, `===`), evaluación de condiciones múltiples, valores *truthy* y *falsy*, y validación de errores lógicos (como la prevención de división por cero).
* **Objeto Math:** 
    Cálculo de potencias y raíces cuadradas (`Math.pow()`, `Math.sqrt()`), generación de números aleatorios en un rango y redondeo de valores (`Math.random()`, `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.max()`, `Math.min()`).
* **Funciones y modularidad:** 
    Declaración de funciones, paso de parámetros/argumentos, retorno de valores (`return`) y reutilización de código.
* **Operadores JavaScript:** 
    Operadores aritméticos básicos, operador de exponenciación (`**`), comparación estricta (`===`) y operadores lógicos (`&&`).
* **Estructuras de datos y variables globales:**
    Manejo de estado acumulativo con variables globales (`count`), evaluación de múltiples condiciones mediante el operador lógico OR (`||`) y toma de decisiones dinámica combinando `if...else if` con cadenas formateadas.
* **Lógica de años bisiestos y operadores combinados:**
    Implementación de condiciones lógicas compuestas combinando los operadores `&&` (AND), `||` (OR) y el operador módulo (`%`) para evaluar divisibilidad y precedencia de operadores en problemas reales.
* **Estructuras de datos (Arrays) y manipulación:** 
    Creación e inicialización de matrices vacías, adición de elementos al inicio y final (`unshift()`, `push()`), eliminación de elementos (`shift()`, `pop()`), modificación de elementos por índice (`array[0]`) e interpolación de matrices dentro de funciones mediante *template literals*.
* **Estructuras de datos (Arrays) y manipulación:** 
    Creación e inicialización de matrices vacías, adición de elementos al inicio y final (`unshift()`, `push()`), eliminación de elementos (`shift()`, `pop()`), modificación de elementos por índice (`array[0]`), unión de elementos formateados con `.join(", ")`, selección aleatoria mediante índices calculados con `Math.random()` y control de casos borde para evitar errores con matrices vacías (`array.length > 0`).
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
* `09-lab-crear-app-prestamo`
    Implementación de un sistema de evaluación de calificaciones crediticias y préstamos (`getLoanMessage`) utilizando condicionales compuestos (`if / else if / else`) y operadores lógicos (`&&`).
* `10-lab-temperatura-fahrenheit`
    Implementación de una función de conversión de unidades de temperatura (`convertCtoF`) que transforma valores de grados Celsius a Fahrenheit aplicando fórmulas matemáticas básicas en el retorno de la función.
* `11-lab-conteo-cartas`
    Implementación de una función de conteo de cartas para blackjack (`cardCounter`) que modifica una variable global en función de los valores recibidos (números y cadenas) y devuelve la decisión de juego (`Bet` o `Hold`) formateada.
* `12-lab-leap-year-calculator/script.js`
    Implementación de una función (`isLeapYear`) que determina si un año es bisiesto aplicando la regla de divisibilidad por 4, la excepción de divisibilidad por 100 y la regla del siglo por 400 mediante expresiones lógicas compuestas.
* `13-lab.truncar-string/script.js`
    Implementación de una función (`truncateString`) que evalúa la longitud de un texto mediante `.length` y lo recorta a un límite indicado usando `slice()`, concatenando puntos suspensivos (`...`) solo cuando la cadena original supera dicha cantidad.
* `14-lab-confirm-ending/script.js`
    Implementación de la función `confirmEnding` que determina si un texto finaliza con una subcadena específica. Utiliza `.length` para calcular la dimensión del sufijo buscado y `.slice()` con índice negativo para extraer y comparar estrictamente los últimos caracteres sin emplear `.endsWith()`.
* `15-workshop-shoppinglist-array/script.js`
    Desarrollo de una lista de compras interactiva utilizando una matriz. Práctica de métodos mutadores de arrays (`push()`, `unshift()`, `pop()`, `shift()`), modificación directa por índice y formateo dinamico del contenido mediante una función con *template literals*.
* `16-lab-programe-lunch-picker/script.js`
    Desarrollo de un sistema de gestión de menús de almuerzo. Implementación de funciones modulares para añadir (`push`, `unshift`), eliminar (`pop`, `shift`), seleccionar elementos aleatorios (`Math.random`) y listar opciones (`.join()`), asegurando el manejo seguro de casos borde en matrices vacías (`.length`).
------------------------------------------------------------------------------------------------------------------------------------------------

## ¿Cómo ejecutar los ejercicios?

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
node 09-lab-crear-app-prestamo/script.js
node 10-lab-temperatura-fahrenheit/script.js
node 11-lab-conteo-cartas/script.js
node 12-lab-leap-year-calculator/script.js
node 13-lab-truncar-string/script.js
node 14-lab-confirm-ending/script.js
node 15-workshop-shoppinglist-array/script.js
node 16-lab-programe-lunch-picker/script.js