let year = 2000;
function isLeapYear(num){
    if ((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0)){
        return num + " " + "is a leap year.";
    } else{
        return num + " " + "is not a leap year.";
    }
}
let result = isLeapYear(year);
console.log(result);

// comprobacion
year = 2024;
console.log(isLeapYear(year));
year = 2000;
console.log(isLeapYear(year));
year = 1900;
console.log(isLeapYear(year));