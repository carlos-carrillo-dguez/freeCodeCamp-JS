const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

/**
 *  Construir el par de un hoyo y los golpes realizados en su termino correspondiente
 *      @param {number} par - El valor estandar de golpes para el hoyo
 *      @param {number} strokes - El numero de golpes realizado por el jugador
 *      @returns {string} El termino de puntuacion de golf correspondiente  
 */

function golfScore(par, strokes){
    if (strokes === 1){
    return names[0];
    }else if(strokes <= par - 2){
    return names[1];
    } else if(strokes === par -1){
    return names[2];
    } else if(strokes === par){
    return names[3];
    } else if(strokes === par +1){
    return names[4];
    } else if(strokes === par + 2){
    return names[5];
    } else if(strokes >= par +3){
    return names[6];
    }
}
console.log(golfScore(1,1)); // Ouput: Hole-in-one!
console.log(golfScore(3,1)); // Ouput: Hole-in-one!
console.log(golfScore(4,1)); // Ouput: Hole-in-one!
console.log(golfScore(5,1)); // Ouput: Hole-in-one!
console.log(golfScore(4,2)); // Ouput: Eagle
console.log(golfScore(5,2)); // Ouput: Eagle
console.log(golfScore(3,2)); // Ouput: Birdie
console.log(golfScore(4,3)); // Ouput: Birdie
console.log(golfScore(5,4)); // Ouput: Birdie
console.log(golfScore(3,3)); // Ouput: Par
console.log(golfScore(4,4)); // Ouput: Par
console.log(golfScore(5,5)); // Ouput: Par
console.log(golfScore(3,4)); // Ouput: Bogey
console.log(golfScore(4,5)); // Ouput: Bogey
console.log(golfScore(5,6)); // Ouput: Bogey
console.log(golfScore(3,5)); // Ouput: Double Bogey
console.log(golfScore(4,6)); // Ouput: Double Bogey
console.log(golfScore(5,7)); // Ouput: Double Bogey
console.log(golfScore(3,7)); // Ouput: Go Home!
console.log(golfScore(4,8)); // Ouput: Go Home!
console.log(golfScore(5,9)); // Ouput: Go Home!