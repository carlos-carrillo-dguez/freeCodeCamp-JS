//Definiciones de los requisitos minimos
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

/* Funcion para la evaluacion del prestamo(getLoanMessage)
    - If => Evaluacion para prestamo Duplex (Duplex + Condominio + Auto)
    - Else if(1) => Evaluacion para prestamo condominio (Condominio + Auto)
    - Else if(2) => Evaluacion para prestamo solo de auto
    - Else => Cuando no se cumple ninguna de las condiciones anteriores
*/
function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

// Creacion de las variables guardando los resultados de llamar a la funcion getLoanMessage con diferentes casos
const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

// llamada a las variables
console.log(duplexLoanMsg); // Output: You qualify for a duplex, condo, and car loan.
console.log(condoLoanMsg); // Output: You qualify for a condo and car loan.
console.log(carLoanMsg); // Output: You qualify for a car loan.
console.log(noLoanMsg); // Output: You don't qualify for any loans.
