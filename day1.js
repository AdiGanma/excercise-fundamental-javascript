// NO 1
// define variable and assign value to variable
const rectangleLength = 5;
const rectangleWidht = 3;

// define variable to keep the result and implemen the formula parimeter rectangle
const rectangleParimeter = (2 * (rectangleLength + rectangleWidht));
console.log(rectangleParimeter);

// NO 2
// // define variable and assign value to variable
const radius = 5;
const pi = 3.14;

// mencari diameter lingkaran
const diameter = 2 * radius;
console.log(diameter);

// mencari circumferen
const circumference = (pi * diameter);
console.log(circumference);

// mencari area lingkaran
const area = (pi*(radius** 2));
console.log(area);

// NO 3
const angleA = 80;
const angleB = 65;
const angleT = 180;

// RUMUS
const angleC = angleT - (angleA + angleB);
console.log(angleC);


// NO 4
const date1 = new Date("2022-01-20");
console.log(date1);
const date2 = new Date("2022-01-22");
console.log(date2);
const date3 = (date2.getDay()-date1.getDay());
console.log(date3);
const difference = date2 - date1 ;
console.log(difference / (24 * 3600 * 1000));

// NO 5
function countYearsMonthDays(days) {
    const years = Math.floor(days / 365);                       // untuk menghitung hari
    const remainingDaysAfterYears = days % 365;                 // menghitung sisa hari setelah di rubah ke tahun
    const months = Math.floor(remainingDaysAfterYears / 30);    // menghitung bulan
    const remainingDays = remainingDaysAfterYears % 30;         // menghitung sisa hari setelah di rubah ke bulann
    
    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}, ${remainingDays} day${remainingDays !== 1 ? 's' : ''}`;
}

const days = 400;
const result = countYearsMonthDays(days);
console.log(result); 

const day1 = 366;

const years1 = Math.floor(day1 / 365); 
const month1 = Math.floor (day1 % 365 / 30 );
const day2 = Math.floor (day1 % 365 % 30);

console.log(years1,month1,day2);

// NO 1
const panjangk = 5;
const lebark = 3;

const keliling = panjangk * lebark;
console.log(keliling);