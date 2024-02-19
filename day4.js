// EXAMPLE
// function triangle(height) {
//   for (let i = 1; i <= height; i++) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }

//     console.log(row);
//   }
// }

// triangle(5);

// NO 1
// Create a function that can create a triangle pattern according to the height we provide like the
// following :
//      01
//      02 03
//      04 05 06
//      07 08 09 10
// Parameters : height → triangle height

// function triangle(height) {
//   let currentNumb = 1;

//   for (let i = 1; i <= height; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += (currentNumb < 10 ? "0" : " ") + currentNumb + " ";
//       currentNumb++
//     }

//     console.log(row);
//   }
// }

// triangle(4);
// console.log(triangle());

// function triangle(height) {
//   let x = "";
//   let count = 1;

//   for (let i = 1; i <= height; i++) {
//     for (let j = 1; j <= i; j++) {
//       x += count.toString().padStart(2, 0) + " ";
//       count++;
//     }
//     x += "\n";
//   }
//   return x;
// }
// console.log(triangle(4));

// NO 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

// function fizzBuzz(n) {
//   let message = "";

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       message += "FizzBuzz" + "";
//     } else if (i % 3 === 0) {
//       message += "Fizz" + " ";
//     } else if (i % 5 === 0) {
//       message += "Buzz" + " ";
//     } else {
//       message += i + " ";
//     }
//   }
//   console.log(message);
// }
// fizzBuzz(15);

// function loopingLength(n) {
//   let mulai = 1;
//   let x = "";
//   const a = "Fizz";
//   const b = "Buzz";

//   for (let i = 1; i <= n; i++) {
//     if (mulai % 3 === 0 && mulai % 5 === 0) {
//       x += a + b;
//     } else if (mulai % 3 === 0) {
//       x += a;
//     } else if (mulai % 5 === 0) {
//       x += b;
//     } else {
//       x += mulai;
//     }
//     if (i < n) {
//       x += " ";
//     }
//     mulai++;
//   }
//   return x;
// }
// console.log(loopingLength(15));

// NO 3
//  Create a function to calculate Body Mass Index (BMI)
//  Formula : BMI = weight (kg) / (height (meter))²
//  Parameters : weight & height
//  Return values :
// ○     < 18.5 return “less weight”
// ○    18.5 - 24.9 return “ideal”
// ○    25.0 - 29.9 return “overweight”
// ○    30.0 - 39.9 return “very overweight”
// ○    > 39.9 return “obesity”

// function calcberat(weight, height) {
//   const bmi = weight / (height*height);

//   if (bmi < 18.5) {
//     return "less weight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return "ideal";
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     return "overweight";
//   } else if (bmi >= 30 && bmi <= 39.9) {
//     return "very overweight";
//   } else {
//     return "obesity";
//   }
// }

// const result = calcberat(97, 1.75)
// console.log(result);

// function calcberat(kg, cm) {
//   let m = cm / 100;
//   const bmi = kg / m ** 2;

//   if (bmi < 18.5) {
//     return "less weight";
//   } else if (bmi > 18.5 && bmi < 24.9) {
//     return "ideal";
//   } else if (bmi > 25 && bmi < 29.9) {
//     return "overweight";
//   } else if (bmi > 30 && bmi < 39.9) {
//     return "very overweight";
//   } else {
//     return "obesity";
//   }
// }

// kg = 97;
// cm = 175;

// let result = calcberat(kg, cm);

// console.log(result);

// NO 4
// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// BUILD IN METHOD

// function removeOddNumber(arr) {
//   return arr.filter((item) => item % 2 === 0);      // filter mereturn array baru
// }
// console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]));

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = num.filter((even) => {
//   if (even % 2 === 0) {
//     return even;
//   }
// });
// console.log(result);

// TANPA BUILD IN METHOD

// function removeOddNumber(arr) {
//   const evenNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(removeOddNumber(inputArray));

// // NO 5
// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

// const hello = "Hello World";
// const convert = hello.split(" ");

// console.log(convert);

// const splitString = function (input) {
//   let kata = [];
//   let temp = "";

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] == " ") {
//       kata.push(temp);
//       temp = "";
//       continue;
//     }

//     temp += input[i];
//   }

//   kata.push(temp);
//   return kata;
// };

// console.log(splitString("Hello World"));