let count = 0;
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
