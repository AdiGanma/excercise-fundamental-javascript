// NO 1
// ● Create a function to calculate array of student data
// ● The object has this following properties :
//  ○ Name → String
//  ○ Email → String
//  ○ Age → Date
//  ○ Score → Number
// ● Parameters : array of student
// ● Return values :
//  ○ Object with this following properties :
//      ■ Score
//          ● Highest
//          ● Lowest
//          ● Average
//      ■ Age    
//          ● Highest
//          ● Lowest
//          ● Average

// const dataStudent = [
//     {name: "Joko", email: "joko@gmail.com", age:'1960/07/11' , score: 100},
//     {name: "Wowo", email: "wowogemoy@gmail.com", age: '1999/05/12' , score: 70},
//     {name: "Prabroro", email: "prabroro@gmail.com", age: '1945/08/17' , score: 11},
//     {name: "Janggar", email: "janggar@gmail.com", age: '1970/12/23', score: 50},
// ]
// console.log(dataStudent.length);

// function calculate(arrayOfStudent) {
//     let scores = []

//     for (let i = 0; i < arrayOfStudent.length; i++) {
//         scores.push(arrayOfStudent[i]['score'])
//     }
//     console.log(scores);
//     let maxScores = Math.max(...scores)
//     console.log(maxScores);
//     let minScores = Math.min(...scores)
//     console.log(minScores);
//     let averageScore = (scores.reduce((a, b) => a + b) / scores.length);
//     console.log(averageScore);

//     let ages = [];
//     for (let i = 0; i < arrayOfStudent.length; i++) {
//         const getAge = birthDate => Math.floor((new Date() - new Date (birthDate).getTime()) / (365 * 24 * 3600 * 1000))
//         const age = getAge(arrayOfStudent[i]["age"])
//         console.log(age);
//         ages.push(age)
//     }
//     console.log(ages);
//     let maxAges = Math.max(...ages)
//     console.log(maxAges);
//     let minAges = Math.min(...ages)
//     console.log(minAges);
//     let averageAges = (ages.reduce((a, b) => a + b) / ages.length);
//     console.log(averageAges);

//     const result = [
//         {score: {highest: maxScores, lowest: minScores, average: averageScore}},
//         {age: {highest: maxAges, lowest: minAges, average: averageAges}},
//     ]
    
//     return result
// }

// console.log(calculate(dataStudent));





