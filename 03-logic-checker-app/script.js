// Declaracion de la Variable hasDeveloperJob y su condicion
const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer."); // Output: Timmy is employed as a developer.
}

// Declaracion de la Variable isTimmyAGamer y su condicion
const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft."); // No imprime nada porque la condición es false
}

// Declaracion de la Variable timmyAge y su condicional if...else
const timmyAge = 18;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive."); // Output: Timmy is old enough to drive.
} else {
  console.log("Timmy is not old enough to drive."); // No se ejecuta porque timmyAge >= 16 es true
}

/*
  Salida en terminal
    Timmy is employed as a developer.
    Timmy is old enough to drive.
*/