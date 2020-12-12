let country = "Korea";
let continent = "puninsula";
let population = 60000000;

// console.log(country, continent, population);

// let isIsland = true;
// let language = "Korean";
// const gender = "man"
// console.log(typeof isIsland, typeof population, typeof country, typeof language);

// //Basic operators
// console.log(population/2);
// console.log(population+1);
// const Finland = 6000000;
// console.log(population>Finland);
// const average_population = 33000000;
// console.log(average_population<population);
// const description = "Portugal is in Europe, and its 11 million people speak portuguese"
//Coding Challenge #1
const MarkMess = 78;
const MakrkHeight = 1.69;
const JohnMess = 92;
const JohnHeight = 1.95

const MarkBMI = MarkMess/MakrkHeight**2;
console.log(MarkBMI);
const JohnBMI = JohnMess/JohnHeight**2;
console.log(JohnBMI);
const MarkHigherBMI = MarkBMI>JohnBMI;
console.log(MarkHigherBMI);

// //Strings and template literals
// console.log(`${country} is in ${continent}, and its ${population} people speak ${language}`)

//If statement

// if (population>33000000) {
//      console.log(`${country}'s population is above average`)
// }else {
//      console.log(`${country}'s population is ${33000000-population} below average`)
// };

// Code Challenge #2

// if (MarkBMI>JohnBMI) {
//     console.log(`Mark's BMI(${MarkBMI}) is higher than John's(${JohnBMI})!`)
// } else {
//     console.log(`John's BMT(${JohnBMI}) is higher than Mark's(${MarkBMI})!`)
// }

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"))
// if (numNeighbours ===  1) {
//     console.log("Only1border")
// } else if (numNeighbours > 1) {
//     console.log("Morethan1borde r")
// } else {
//     console.log("Noborders")
// }
const bill = 30;
const tips = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// const tips = (50 <= bill <= 300) ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}. Therefore the tip should be ${tips}. Total price is ${tips+bill}`)