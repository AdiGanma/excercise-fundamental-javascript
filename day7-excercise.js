// NO 1
// ● Create a function to check if two objects are equal
// ● Example
//  ○ Input : { a: 2 } & { a: 1 }
//  ○ Output: false
// ● Example
//  ○ Input : { a: “Hello” } & { a: 1 }
//  ○ Output: false
// ● Example
//  ○ Input : { a: 1 } & { a: 1 }
//  ○ Output: true

// function areObjectEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.lenght !== keys2.lenght) {
//     return false;
//   }
//   for (const key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const arg1 = { a: 2 };
// const arg2 = { a: 2 };
// console.log(areObjectEqual(arg1, arg2));

// function checkValue(obj1, obj2) {
//   const inputObj1 = Object.entries(obj1);
//   const inputObj2 = Object.entries(obj2);

//   if (inputObj1.length !== inputObj2.length) {
//     return false;
//   }
//   for (let i = 0; i < inputObj1.length; i++) {
//     if (inputObj1[i][0] !== inputObj2[i][0]) {
//       return false;
//     }
//     if (inputObj1[i][1] !== inputObj2[i][1]) {
//       return false;
//     }
//     return true;
//   }
// }

// function checkValue(obj1, obj2) {

//   if (obj1.a === obj2.a) {
//     return true
//   } else {
//     return false
//   }
// }

// const obj1 = {
//   a: 2,
// };
// const obj2 = {
//   a: 2,
// };

// console.log(checkValue(obj1,obj2));

// NO 2
// ● Create a function to get the intersection of two objects
// ● Example
//  ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
//  ○ Output: { a: 1 }

// const intersection = (obj1, obj2) => {
//   const duplicate = {};

//   for (let key in obj1) {               // for in -> untuk looping di dalam object mencari property bukan index
//     if (obj1[key] == obj2[key]) {
//       duplicate[key] = obj1[key];
//     }
//   }
//   return duplicate;
// };

// const arg1 = { a: 1, b: 2 };
// const arg2 = { a: 1, c: 3 };
// console.log(intersection(arg1,arg2));

// =====================================================================
// function intersection(arr1, arr2) {
//     const output = {};
//     for (const key in arr1) {
//       if (arr2.hasOwnProperty(key) && arr1[key] === arr2[key]) {
//         output[key] = arr1[key];
//       }
//     }
//     return output;
//   }

//   const arr1 = { a: 1, b: 2 };
//   const arr2 = { a: 1, b: 3 };
//   console.log(intersection(arr1, arr2));

// NO 3
// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :

// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]

// =====================================================================
// const removeDuplice = (arr1, arr2) => {
//   const combineArray = [...arr1, ...arr2];
//   console.log(combineArray);

//   const temp = [];

//   for (let i = 0; i < combineArray.length; i++) {
//     // filter -> mereturn array baru

//     const duplicateValues = temp.filter((val) => {
//       return val.email === combineArray[i].email;
//     });

//     if (!duplicateValues.length) {
//       temp.push(combineArray[i]);
//     }
//   }

//   return temp;
// };

// const arg1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];
// const arg2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];

// console.log(removeDuplice(arg1, arg2));

// =====================================================================
// function mergeArraysAndDuplicate(array1, array2) {
//     const mergedArray = [...array1];
//     console.log(mergedArray);

//     array2.forEach(item => {
//       if (!mergedArray.some(duplicate => duplicate.email === item.email)) {
//         mergedArray.push(item);
//       }
//     });

//     return mergedArray;
//   };

//   const array1 = [
//     { name: "Student 1", email: "student1@mail.com" },
//     { name: "Student 2", email: "student2@mail.com" },
//   ];
//   const array2 = [
//     { name: "Student 1", email: "student1@mail.com" },
//     { name: "Student 3", email: "student3@mail.com" },
//   ];

//   console.log(mergeArraysAndDuplicate(array1, array2));

// NO 4
// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

// =====================================================================
// const switchValueToKey = (arr) => {
//   const result = [];

//   arr.forEach((item) => {
//     // item looping 1 => [{ name: ‘David’, age: 20 }]
//     let temp = {};

//     for (let key in item) {
//       console.log(key);
//       console.log(item[key]);
//       temp[item[key]] = key;
//     }

//     result.push(temp);
//   });

//   return result;
// };

// const arr1 = [{ name: "David", age: 20 }];
// console.log(switchValueToKey(arr1));

// =====================================================================
// function switc(arrayOfObjects) {
//   let result = [];

//   arrayOfObjects.forEach(item => {
//       Object.entries(item).forEach(([key, value]) => {
//           result.push({ [value]: key });
//       });
//   });

//   return result;
// }

// const input = [{ name: 'David', age: 20 }];
// console.log(switc(input));

// NO 5
// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// =====================================================================
// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// const n = 5;
// console.log(`factorial ${n}! = ` + factorial(n));

// =====================================================================
// const factorial = (n) => {
//   if (n === 1) {
//     return {
//       steps: ["1"],
//       total: 1,
//     };
//   } else {
//     const next = factorial(n - 1);

//     return {
//       steps: [n, ...next.steps],
//       total: n * next.total,
//     };
//   }
// };
// const number = 5;
// const { steps, total } = factorial(number);
// console.log(steps.join(" x ") + " = " + total);

// =====================================================================
// function recursion(amount) {
//   let factorial = amount - 1;
//   if (amount == 0) {
//     return 1;
//   } else {
//     return amount * recursion(factorial);
//   }
// }

// const amount = 5;
// console.log(recursion(amount));
