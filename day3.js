// // NO 1
// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output : 
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

// const number = 9;
// const limit = 10;
// for (let i = 1; i <= limit; i ++){
//     console.log(`multplication ${number} x ${i} : ${number * i}`);
// }

// // NO 2
// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

// const palindrome = "sadam";
// let result = true;
// let j = palindrome.length -1;

// for (let i = 0; i <= j; i++){
//     if (palindrome[i] !== palindrome[j]){
//         result = false;
//         break
//     }
//     j--;
// }
// console.log(result === true ? "palindrome" : "not palindrom");

// // NO 3
// Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

// const centimeter = 100000;
// const convert = centimeter / 100000;
// console.log(centimeter + " cm ke km = ", + convert + "km");

// // NO 4
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

// const money = 10000 ;
// const convertmoney =  new Intl.NumberFormat ('id-ID', {
//     style : "currency",
//     currency : "IDR"
// }) .format(money)
// console.log(convertmoney);

// // NO 5
// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

// const kata = "Hello World";
// const searchkata = "ell";
// const indexofkata = kata.indexOf(searchkata);
// const endidx = indexofkata + searchkata.length;
// const cutkata = kata.slice(0, indexofkata) + kata.slice(endidx);

// console.log(cutkata);

// NO 6
// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

// const reversword = "hello world";
// const wordToArr = reversword.split(" ");
// wordToArr
// const capitalize = wordToArr.map(
//     (item) => item.charAt(0).toUpperCase() + item.slice(1)
// );
// capitalize
// const result = capitalize.join(" ");
// result

// NO 7
// Write a code to reverse a string.
// ○ Example : “hello” → “olleh”

// const word = "hello";
// const end = word.length -1;
// let newStr = "";
// for (let i = end; i >= 0; i--){
//     newStr = word[i];
//     console.log(newStr);
// }

// NO 8
// Write a code to swap the case of each character from string 
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

// const str = 'The QuiCk BrOwN Fox';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// let result = [];

// for (let i = 0; i < str.length; i++) {
//   if(UPPER.indexOf(str[i]) !== -1) {
//     result.push(str[i].toLowerCase());
//   } else if(LOWER.indexOf(str[i] !== -1)) {
//     result.push(str[i].toUpperCase());
//   } else {
//     result.push(str[i]);
//   }
// }
// console.log(result.join(''));

// NO 9
// Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

// const num1 = 42;
// const num2 = 41;

// console.log(num1 > num2 ? `${num1}` + " lebih besar dari " + `${num2}` : `${num1}` + " lebih kecil dari " + `${num2}`);

// NO 10
// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// if (num1 > num2){
//     let sort = num1;
//     num1 = num2;
//     num2 = sort;
// }
// if (num1 > num3){
//     let sort = num1;
//     num1 = num3;
//     num3 = sort;
// }
// if (num2 > num3){
//     let sort = num2;
//     num2 = num3;
//     num3 = sort;
// }
// console.log(num1 + ', ' + num2 + ', ' + num3);

// NO 11
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// ○ Example : “hello” → 1

let input = "hello";
let result = "";

if (typeof input === "string"){
    result = 1;
}else if (typeof input === "number"){
    result = 2;
}else {
    result = 3;
}
console.log(result);
console.log(input + " -> " + result);

// NO 12
// Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y

// const str = "An Apple a day keeps the doctor away";
// const modifiedStr = "*";
// let result = "";

// for (let i = 0; i < str.length; i++){
//     if (str[i] === 'a' || str[i] === 'A'){
//         result += modifiedStr;
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);