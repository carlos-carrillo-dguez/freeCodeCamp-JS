// Variable Global para mantener el estado del contado
let count = 0;
/* 
    Primer if/ else if
        if => Cartas entre (2 al 6) e incrementar la variable 'count'
        else if => Cartas entre (10, J, Q, K, A) y decrementar la variable 'count'
        Cartas neutrales entre (7, 8, 9) no alteran la variable 'count'

    Segundo if/ else
        Evaluación de la decisión final según el valor actual de la variable 'count'
 */
function cardCounter(card){
    if (card >= 2 && card <= 6){
        count++;
    } else if (card === 10 || card ===  "J" || card === "Q" || card === "K" || card === "A"){
        count--;
    }
    if (count > 0){
        return count + " " + "Bet";
    } else {
        return count + " " + "Hold"
    }
}
console.log(cardCounter(6)); // Output: 1 Bet
console.log(cardCounter("Q")); // Output: 0 Hold
console.log(cardCounter(3)); // Output: 1 Bet
console.log(cardCounter("A")); // Output: 0 Hold
console.log(cardCounter(5)); // Output: 1 Bet
console.log(cardCounter(6)); // Output: 2 Bet
