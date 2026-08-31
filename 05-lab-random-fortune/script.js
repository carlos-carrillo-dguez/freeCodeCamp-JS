// Declaracion fortunas del 1 al 5
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// Generar un numero aleatorio entre el 1 al 5
const randomNumber = Math.floor(Math.random() *(5) + 1);

// Variable para guardar la fortuna seleccionada
let selectedFortune;

// Seleccion de fortuna segun el numero generado aleatorio
if (randomNumber == 1){
  selectedFortune = fortune1;
} else if (randomNumber == 2){
  selectedFortune = fortune2;
}else if (randomNumber == 3){
  selectedFortune = fortune3;
}else if (randomNumber == 4){
  selectedFortune = fortune4;
}else{
  selectedFortune = fortune5;
}

// Mostrar el resultado por la consola
console.log(selectedFortune);