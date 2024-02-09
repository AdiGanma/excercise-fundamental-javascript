// NO 1

const celcius = 60;
const fahreinheit = ((celcius * 9/5))+32;
console.log("maka hasil perubahan celcius ke fahteinheit " , fahreinheit);

const fah = 140;
const cel = ((fah-32)* 5 )/9;
console.log(fah + "f to cel = ", cel + "C");

// NO 2
const number = 1;
// if (number % 2 == 0){
//     console.log("the number is even");
// } else {
//     console.log("the number is odd");
// }
console.log(number % 2 == 0 ? "genap" : "ganjil");

// NO 3
const prima = 7;
let isPrime = true;

for(let i = 2; i < prima; i++){
    if (prima % i === 0){
        isPrime = false;
        break;
    }
}
console.log(isPrime);

// if (prima % 2 == 1 && prima > 2 ){
//     console.log(`${prima} adalah bilangan prima`);
// } else if(prima % 2 != 1){
//     console.log(`${prima} bukan bilangan prima`);
// } else {
//     console.log("1 bukan prima");
// }

// NO 4

const n = 5;
let sum = 0;
let message = "";

for (let i = 1; i <= n; i++){
    sum += i;

    message += i + (i !== n ? " + " : " ")
}

console.log(sum);
console.log(message + " = " + sum);

// NO 5

const factorial = 6;
let result = 1;
let pesan = "";

for (let j = factorial; j > 0; j--){
    result *= j;

    pesan += j + (j === 1 ? "" : " * ");
} 
console.log(result);
console.log(pesan + " = " + result);

// NO 6
    
const fibonacci = 15;
let n1 = 0; n2 = 1;

for (let k = 1; k <= fibonacci; k++){
    nextstep = n1 + n2;
    n1 = n2;
    n2 = nextstep;
}
console.log(n1);



