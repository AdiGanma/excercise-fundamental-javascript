// NO 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// function calculateArr(arr) {

//     let sortArr = arr.sort((a, b) => a - b);
//     console.log(sortArr);

//     let lowest = Math.min(...arr);
//     let highest = Math.max(...arr);
//     let average = arr.reduce((a, b) => a + b) / arr.length;

//     const result = "lowest : " + lowest + ", highest: " +  highest + ", average: " + average.toFixed(5)
//     return result
// }

// const arr = [12, 5, 23, 18, 4, 45, 32];
// console.log(calculateArr(arr));

// NO 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// function tambahAnd(arr) {
//   const potong = arr.splice("-1").join(", ")
//   const toStr = arr.join(", ")
//   const result = toStr + ", and " + potong
//   return result;
// }
// const arr = ["apple", "banana", "cherry", "date"];
// console.log(tambahAnd(arr));

// NO 3
// Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

// function stringToArr(arr) {
//   return arr.split(" ");
// }

// const inputArr = "Hello World";
// console.log(stringToArr(inputArr));

// NO 4
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// function calculateArr(arr1, arr2) {
//   const result = [];
//   const maxLength = Math.max(arr1.length, arr2.length);

//   for (let i = 0; i < maxLength; i++) {
//     const sum = (arr1[i] || 0) + (arr2[i] || 0);
//     result.push(sum);
//   }

//   return result;
// }

// console.log(calculateArr([1, 2, 3], [3, 2, 1]));

// function matrix(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr[i] = arr1[i] + arr2[i];
//   }
//   return newArr;
// }
// const arr1 = [1, 2, 3];
// const arr2 = [3, 2, 1];
// console.log(matrix(arr1, arr2));

// NO 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// function newElement(arr, element) {
//   const data = new Set(arr);         // set -> menyimpan data yang unik / tidak sama supaya tidak terjadi redudancy
//   if (!data.has(element)) {
//     data.add(element);
//   } else {
//     return false;
//   }
//   return data;
// }

// const arr1 = [1, 2, 3, 4];
// const newE = 4;
// console.log(newElement(arr1, newE));

// NO 6
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

// function removeOddNumber(arr) {
//   return arr.filter((item) => item % 2 === 0);
// }
// console.log(removeOddNumber([1, 2, 3, 4, 5, 6]));

// NO 7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//  The function will return [5, 10, 24, 3, 6]

// function maxSize(numbers, max) {
//   const result = [];
//   numbers.forEach((item) => {
//     if (result.length === max) return;

//     result.push(item)
//   });

//   return result
// }

// const max = 5;
// const numbers = [5, 10, 24, 3, 6, 7, 8];
// console.log(maxSize(numbers,max));

// NO 8
// . Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

// function combineArr(arr1, arr2) {
//   const concat = arr1.concat(arr2);
//   return concat;
// }

// const newArr1 = [1, 2, 3]
// const newArr2 = [4, 5, 6]
// console.log(combineArr(newArr1, newArr2));

// NO 9
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// function duplicate(arr) {
//   const occurance = new Map();
//   const array = [];

//   for (let i = 0; i < arr.length; i++) {
//     const elemnt = arr[i];
//     occurance.set(elemnt, (occurance.get(elemnt) || 0) + 1);
//   }
//   console.log(occurance);

//   for (const [key, value] of occurance) {
//     if (value > 1) {
//       array.push(key);
//     }
//   }

//   return array;
// }

// const arrDup = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(duplicate(arrDup));

// NO 10
// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// function difference(arr, arr2) {
//   const newArr1 = arr1.filter((element) => !arr2.inculudes(element));
//   const newArr2 = arr2.filter((element) => !arr1.inculudes(element));

//   return newArr1.concat(newArr2);
// }

// console.log(difference(arr1,arr2));

// NO 11
// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// function primitiveDatas(arr){
//   const newArr = []
//   const primitive = new Map([
//     [1, true],
//     [undefined, true],
//     ["string", true],
//   ])
//   console.log(primitive);
//   for (let i of arr){
//     if (primitive.has(i)){
//       newArr.push(i)
//     }
//   }
//   return newArr
// }

// const dataType = [1, [], undefined, {}, "string", {}, []]
// console.log(primitiveDatas(dataType));

// No 12
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// function getSmallest(arr) {
//   const secondSmallest = arr.sort((a, b) => a - b);
//   console.log(secondSmallest[1]);
//   return secondSmallest[1];
// }
// const input = [5, 3, 1, 7, 2, 6];
// console.log(getSmallest(input));

// NO 13
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// function smallestNum(arr) {
//   const arrowOfNum = [];
//   for (let i of arr) {
//     if (typeof i === "number") {
//       arrowOfNum.push(i);
//     }
//   }
//   const sum = arrowOfNum.reduce((a, b) => a + b);
//   return sum;
// }

// const mixedArr = ["3", 1, "string", null, false, undefined, 2];
// console.log(smallestNum(mixedArr));

// NO 14
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// function sumDup(arr) {
//   const duplicate = arr.filter((value, index, array) => {
//     return array.indexOf(value) !== index;
//   });
//   console.log(duplicate);

//   let result = 0;
//   for (let item of arr) {
//     if (duplicate.includes(item)) {
//       result += item;
//     }
//   }

//   return result;
// }

// console.log(sumDup([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// function returnSumpDup(arr) {
//   const occurance = new Map();
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     occurance.set(element, (occurance.get(element) || 0) + 1);
//   }
//   for (const [key, value] of occurance) {
//     if (value > 1) {
//       const temp = key * value;
//       sum = temp;
//     }
//   }
//   return sum;
// }

// const input = [10, 20, 40, 10, 50, 30, 10, 60, 10]
// console.log(returnSumpDup(input));

// NO 15
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win

// function gameSuit(playerChoice) {
//   const choices = ["batu", "gunting", "kertas"];

//   const compChoices = choices[Math.floor(Math.random() * 2.9)];

//   if (!choices.includes(playerChoice)){
//     return "wrong input"
//   }

//   if (playerChoice === compChoices) {
//     return "draw";
//   }

//   if (
//     (playerChoice === "batu" && compChoices === "gunting") ||
//     (playerChoice === "gunting" && compChoices === "kertas") ||
//     (playerChoice === "kertas" && compChoices === "batu")
//   ) {
//     return "Win"
//   }

//   return "Lose"
// }

// console.log(gameSuit("kertas"));