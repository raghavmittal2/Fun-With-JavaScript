/* first two years of dog's age in human years is 10.5 years in dog years. 
The remaining subsequent human years are 4 years each in dog years.
Calculate your age in dog years. */

//setting up my age in a variable
let myAge = 23;

//early years of a dog's age that need to be accounted for
let earlyYears = 2;
//calculating earlyYears in dog years
earlyYears *= 10.5;

//later years left that needs to be accounted for
let laterYears = myAge - 2;

//calculatign remaining years in dog years
laterYears *= 4;

//calculating age in dog years by adding early and later years
const myAgeInDogYears = earlyYears + laterYears;

//storing my name in a variable in lowercase letters
const myName = "Raghav".toLowerCase();

//printing out string literal with required vars
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`)